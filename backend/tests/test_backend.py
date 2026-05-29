"""Backend tests for Breakfast in Bed by LaCole API."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://akron-breakfast-gem.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --------- Root & Status legacy endpoints ---------
class TestRootStatus:
    def test_root_welcome(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "LaCole" in data["message"]

    def test_status_post_and_get(self, client):
        r = client.post(f"{API}/status", json={"client_name": "TEST_client"})
        assert r.status_code == 200
        data = r.json()
        assert data["client_name"] == "TEST_client"
        assert "id" in data and "timestamp" in data

        rg = client.get(f"{API}/status")
        assert rg.status_code == 200
        assert isinstance(rg.json(), list)
        assert any(s["client_name"] == "TEST_client" for s in rg.json())


# --------- Catering endpoints ---------
class TestCatering:
    def test_create_catering_minimum_required(self, client):
        payload = {
            "name": "TEST_Jane Doe",
            "email": "TEST_jane@example.com",
            "phone": "330-555-1234",
            "message": "Need catering for 50 ppl"
        }
        r = client.post(f"{API}/catering", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["message"] == payload["message"]
        assert "id" in data and "created_at" in data
        # Verify persistence via GET
        rg = client.get(f"{API}/catering")
        assert rg.status_code == 200
        assert any(i["id"] == data["id"] for i in rg.json())

    def test_create_catering_all_optional_fields(self, client):
        payload = {
            "name": "TEST_John Smith",
            "email": "TEST_john@example.com",
            "phone": "+13305551111",
            "event_date": "2026-03-15",
            "guest_count": 75,
            "event_type": "Birthday",
            "message": "Soul food catering please"
        }
        r = client.post(f"{API}/catering", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["event_date"] == "2026-03-15"
        assert data["guest_count"] == 75
        assert data["event_type"] == "Birthday"

    def test_invalid_email_returns_422(self, client):
        r = client.post(f"{API}/catering", json={
            "name": "TEST_x", "email": "notanemail", "phone": "3305551111", "message": "hi"
        })
        assert r.status_code == 422

    def test_missing_required_field_returns_422(self, client):
        r = client.post(f"{API}/catering", json={
            "email": "TEST_x@example.com", "phone": "3305551111", "message": "hi"
        })
        assert r.status_code == 422

    def test_list_catering_sorted_desc(self, client):
        r = client.get(f"{API}/catering")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        if len(items) >= 2:
            for a, b in zip(items, items[1:]):
                assert a["created_at"] >= b["created_at"]
