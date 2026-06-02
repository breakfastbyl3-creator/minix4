"""One-shot script to generate AI food photos for each menu item using Gemini Nano Banana.
Saves results to /app/frontend/public/menu/<slug>.jpg
"""
import asyncio
import base64
import os
import sys
from pathlib import Path
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")

OUT_DIR = Path("/app/frontend/public/menu")
OUT_DIR.mkdir(parents=True, exist_ok=True)

STYLE = (
    "Ultra-realistic professional food photography, soul food breakfast restaurant, "
    "warm cozy lighting, shallow depth of field, top-down or 45-degree angle on a "
    "rustic wooden table, soft natural light, steam rising, golden tones, "
    "appetizing, magazine quality, no text, no watermark."
)

ITEMS = [
    ("big-breakfast",
     "A massive soul food breakfast plate: 2 fluffy buttermilk pancakes drizzled with syrup, "
     "2 strips of crispy bacon, 2 sausage links, scrambled cheese eggs, golden seasoned home "
     "fry potatoes, and a side of creamy buttered grits."),
    ("steak-omelet",
     "A loaded steak omelet stuffed with collard greens, sauteed peppers and onions, melted "
     "cheese — served alongside golden french toast biscuits, seasoned home fries, and creamy "
     "grits in a warm rustic restaurant."),
    ("steak-egg-bacon-sandwich",
     "A hearty croissant breakfast sandwich stacked with tender steak slices, fluffy scrambled "
     "eggs, crispy bacon, and melted cheese — served with seasoned home fries on the side."),
    ("bacon-egg-croissant",
     "A buttery flaky golden croissant sandwich filled with smoky bacon, soft scrambled eggs "
     "and melted American cheese, served with a small mound of golden seasoned home fries."),
    ("sausage-egg-croissant",
     "A warm flaky golden croissant sandwich with savory breakfast sausage patty, fluffy "
     "scrambled eggs, and melted cheese pulling apart at the edges."),
    ("fish-and-grits",
     "Two golden-fried fish fillets perfectly crisp on the outside, served over creamy buttered "
     "stone-ground grits, with a side of scrambled cheese eggs and seasoned home fry potatoes."),
    ("fish-sandwich",
     "A crispy fried fish fillet sandwich on a brioche bun, layered with fried egg, melted "
     "American cheese and crispy bacon, served with a generous side of golden seasoned home fries."),
    ("veggie-omelet",
     "A fluffy three-egg omelet folded over sauteed bell peppers, onions, collard greens, and "
     "melted cheddar cheese — served with seasoned home fries and a side of creamy grits."),
    ("kids-meal",
     "A kid-sized breakfast plate: one fluffy buttermilk pancake with syrup and butter, two "
     "strips of crispy bacon, a small portion of scrambled cheese eggs, and a small scoop of "
     "golden seasoned home fries."),
]


async def gen_one(slug: str, prompt: str):
    out = OUT_DIR / f"{slug}.jpg"
    if out.exists() and out.stat().st_size > 10_000:
        print(f"  skip (exists) -> {out.name}")
        return True
    api_key = os.getenv("EMERGENT_LLM_KEY")
    chat = LlmChat(
        api_key=api_key,
        session_id=f"menu-img-{slug}",
        system_message="You are a professional food photography image generator.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=f"{prompt}\n\nStyle: {STYLE}")
    try:
        _text, images = await chat.send_message_multimodal_response(msg)
    except Exception as e:
        print(f"  ERROR generating {slug}: {e}")
        return False
    if not images:
        print(f"  no image returned for {slug}")
        return False
    img_bytes = base64.b64decode(images[0]["data"])
    out.write_bytes(img_bytes)
    print(f"  saved -> {out} ({len(img_bytes)} bytes)")
    return True


async def main():
    print(f"Generating {len(ITEMS)} food images -> {OUT_DIR}")
    ok = 0
    for slug, prompt in ITEMS:
        print(f"\n[{slug}] {prompt[:80]}...")
        if await gen_one(slug, prompt):
            ok += 1
    print(f"\nDone: {ok}/{len(ITEMS)} succeeded.")


if __name__ == "__main__":
    asyncio.run(main())
