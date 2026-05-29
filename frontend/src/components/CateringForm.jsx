import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { TID } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function CateringForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event_date: "",
    guest_count: "",
    event_type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...form,
        guest_count: form.guest_count ? parseInt(form.guest_count, 10) : null,
      };
      await axios.post(`${API}/catering`, payload);
      setSent(true);
      toast.success("Inquiry sent! LaCole will be in touch shortly.");
      setForm({ name: "", email: "", phone: "", event_date: "", guest_count: "", event_type: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="catering" className="relative py-24 md:py-32 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[#8B0000] uppercase tracking-[0.35em] text-xs font-semibold mb-4">
              Catering & Events
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1A1818] leading-tight mb-6">
              Bring soul food to your <span className="italic text-[#8B0000]">next gathering.</span>
            </h2>
            <p className="text-[#5C4033] leading-relaxed mb-8">
              From baby showers and Sunday brunches to corporate breakfasts and family reunions — LaCole caters with the same care she pours into every plate at the restaurant. Tell us about your event and we'll build you a menu.
            </p>
            <ul className="space-y-3 text-[#1A1818]">
              {["Custom menus for every budget", "Drop-off, set-up, or full service", "Weekday & weekend availability", "Akron, Cleveland & surrounding areas"].map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B0000] mt-0.5 shrink-0" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={submit}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-[rgba(92,64,51,0.15)] shadow-xl"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="c-name" className="text-[#1A1818]">Full Name *</Label>
                <Input
                  id="c-name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  data-testid={TID.cateringName}
                  className="mt-2 h-11 bg-[#FDFBF7] border-[rgba(92,64,51,0.2)]"
                />
              </div>
              <div>
                <Label htmlFor="c-email" className="text-[#1A1818]">Email *</Label>
                <Input
                  id="c-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  data-testid={TID.cateringEmail}
                  className="mt-2 h-11 bg-[#FDFBF7] border-[rgba(92,64,51,0.2)]"
                />
              </div>
              <div>
                <Label htmlFor="c-phone" className="text-[#1A1818]">Phone *</Label>
                <Input
                  id="c-phone"
                  required
                  value={form.phone}
                  onChange={set("phone")}
                  data-testid={TID.cateringPhone}
                  className="mt-2 h-11 bg-[#FDFBF7] border-[rgba(92,64,51,0.2)]"
                />
              </div>
              <div>
                <Label htmlFor="c-date" className="text-[#1A1818]">Event Date</Label>
                <Input
                  id="c-date"
                  type="date"
                  value={form.event_date}
                  onChange={set("event_date")}
                  data-testid={TID.cateringDate}
                  className="mt-2 h-11 bg-[#FDFBF7] border-[rgba(92,64,51,0.2)]"
                />
              </div>
              <div>
                <Label htmlFor="c-guests" className="text-[#1A1818]">Guest Count</Label>
                <Input
                  id="c-guests"
                  type="number"
                  min="0"
                  value={form.guest_count}
                  onChange={set("guest_count")}
                  data-testid={TID.cateringGuests}
                  className="mt-2 h-11 bg-[#FDFBF7] border-[rgba(92,64,51,0.2)]"
                />
              </div>
              <div>
                <Label className="text-[#1A1818]">Event Type</Label>
                <Select value={form.event_type} onValueChange={(v) => setForm((f) => ({ ...f, event_type: v }))}>
                  <SelectTrigger data-testid={TID.cateringEventType} className="mt-2 h-11 bg-[#FDFBF7] border-[rgba(92,64,51,0.2)]">
                    <SelectValue placeholder="Select an event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brunch">Family Brunch</SelectItem>
                    <SelectItem value="corporate">Corporate Breakfast</SelectItem>
                    <SelectItem value="celebration">Celebration / Birthday</SelectItem>
                    <SelectItem value="wedding">Wedding / Shower</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-5">
              <Label htmlFor="c-msg" className="text-[#1A1818]">Tell us about your event *</Label>
              <Textarea
                id="c-msg"
                required
                rows={5}
                value={form.message}
                onChange={set("message")}
                data-testid={TID.cateringMessage}
                className="mt-2 bg-[#FDFBF7] border-[rgba(92,64,51,0.2)]"
                placeholder="Menu interests, dietary notes, delivery vs. on-site, etc."
              />
            </div>
            <Button
              type="submit"
              disabled={loading || sent}
              data-testid={TID.cateringSubmit}
              className="mt-7 w-full md:w-auto rounded-full bg-[#8B0000] hover:bg-[#A52A2A] text-[#FDFBF7] h-12 px-8 font-semibold"
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : sent ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Send className="w-4 h-4 mr-2" />}
              {sent ? "Sent — we'll be in touch!" : loading ? "Sending…" : "Send Catering Inquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
