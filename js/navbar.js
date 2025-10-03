document.addEventListener("DOMContentLoaded", () => {
    fetch("/components/navbar.html")
        .then(res => {
            if (!res.ok) throw new Error("Failed to fetch navbar");
            return res.text();
        })
        .then(html => {
            document.getElementById("navbar").innerHTML = html;
        })
        .catch(err => console.error("Navbar load failed:", err));
});
