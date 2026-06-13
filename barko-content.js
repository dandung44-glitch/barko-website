/* BARKO website content — bilingual ID/EN. Edit text freely; structure must stay. */
window.BARKO_CONTENT = {
  id: {
    nav: { about: "Tentang", experience: "Pengalaman", menu: "Menu", farm: "Peternakan", stay: "Menginap", gallery: "Galeri", events: "Acara", location: "Lokasi", faq: "FAQ", reserve: "Reservasi" },
    hero: {
      kicker: "Barn and Koffee · 1000 mdpl",
      title: "Slow Living\nExperience",
      sub: "Ngopi di kaki gunung, di antara kabut pagi, kebun, dan suara peternakan. Tempat untuk melambat.",
      cta1: "Reservasi Sekarang", cta2: "Jelajahi Pengalaman", scroll: "Gulir untuk mulai"
    },
    about: {
      tag: "Tentang BARKO",
      title: "Sebuah alasan untuk bernapas lebih dalam.",
      body: "BARKO lahir dari kerinduan orang kota akan udara dingin dan tanah yang hijau. Di ketinggian 1000 mdpl, secangkir kopi diseduh perlahan, kabut turun di antara kebun, dan kota berkelip jauh di bawah. Di sini waktu sengaja dibuat lambat.",
      loc: "Kaki gunung, Jawa Barat",
      values: [
        { t: "Dekat Alam", d: "Kebun, kabut, dan hewan ternak sejauh mata memandang." },
        { t: "Farm to Table", d: "Susu, telur, dan herba dipetik dari halaman kami sendiri." },
        { t: "Ketenangan", d: "Tanpa terburu. Hanya angin, hijau, dan napas yang lega." }
      ]
    },
    experience: {
      tag: "The Experience", title: "Lima cara untuk melambat.",
      items: [
        { t: "Ngopi City View", d: "Seduh perlahan sementara lampu kota berkelip jauh di bawah.", img: "FOTO: ngopi dengan city view senja" },
        { t: "Sunrise & Sunset", d: "Langit berganti warna dari teras berkabut.", img: "FOTO: matahari terbit di atas awan" },
        { t: "Udara Gunung", d: "Napas dingin 1000 mdpl, kabut pagi, hening yang penuh.", img: "FOTO: kabut pagi di kebun" },
        { t: "Sapa Ternak", d: "Beri makan domba dan kelinci bersama si kecil.", img: "FOTO: anak memberi makan domba" },
        { t: "Jelajah Kebun", d: "Petik herba, cium tanah basah, lambatkan langkah.", img: "FOTO: kebun herba dan sayur" }
      ]
    },
    menu: {
      tag: "Menu", title: "Dari kebun, ke cangkir Anda.",
      note: "Banyak bahan kami berasal langsung dari peternakan dan kebun BARKO — farm to table dalam arti sebenarnya.",
      cats: [ { key: "kopi", label: "Kopi" }, { key: "nonkopi", label: "Non-Kopi" }, { key: "makanan", label: "Makanan Utama" }, { key: "camilan", label: "Camilan" } ],
      items: [
        { cat: "kopi", name: "Kopi Kabut", desc: "Espresso lokal, susu peternakan, sentuhan gula aren.", price: "32K", sig: true },
        { cat: "kopi", name: "Vietnam Drip Dingin", desc: "Robusta pekat dengan susu kental manis.", price: "30K", sig: false },
        { cat: "kopi", name: "Americano Ketinggian", desc: "Single origin Jawa Barat, panjang dan bersih.", price: "28K", sig: false },
        { cat: "kopi", name: "Latte Aren", desc: "Latte halus dimaniskan gula aren.", price: "33K", sig: false },
        { cat: "nonkopi", name: "Cokelat Gunung", desc: "Cokelat panas dengan susu peternakan segar.", price: "30K", sig: true },
        { cat: "nonkopi", name: "Teh Serai Madu", desc: "Serai kebun, madu hutan, hangat.", price: "25K", sig: false },
        { cat: "nonkopi", name: "Matcha Kabut", desc: "Matcha lembut, susu segar, busa tebal.", price: "35K", sig: false },
        { cat: "makanan", name: "Nasi Liwet Barko", desc: "Liwet, ayam kampung, sambal, lalapan kebun.", price: "55K", sig: true },
        { cat: "makanan", name: "Pasta Asap Kayu", desc: "Pasta panggang, krim, jamur tanah.", price: "52K", sig: false },
        { cat: "makanan", name: "Sup Iga Hangat", desc: "Kaldu iga bening, rempah, untuk udara dingin.", price: "60K", sig: false },
        { cat: "camilan", name: "Pisang Bakar Aren", desc: "Pisang kebun, gula aren, mentega susu.", price: "28K", sig: false },
        { cat: "camilan", name: "Roti Bakar Peternakan", desc: "Roti hangat, mentega dari susu segar kami.", price: "26K", sig: false },
        { cat: "camilan", name: "Kentang Rosemary", desc: "Kentang renyah, rosemary kebun, garam laut.", price: "27K", sig: false }
      ]
    },
    farm: {
      tag: "Peternakan", title: "Datang saat ternak diberi makan.",
      body: "Domba, kelinci, dan ayam kampung tinggal beberapa langkah dari meja Anda. Anak-anak bisa memberi makan dan mengenal mereka dari dekat — sebuah pelajaran tentang dari mana makanan berasal.",
      schedule: [
        { time: "07:00", act: "Beri makan domba" },
        { time: "09:00", act: "Susu segar & sarapan farm-to-table" },
        { time: "11:00", act: "Edukasi anak: kenali ternak" },
        { time: "15:00", act: "Beri makan kelinci" },
        { time: "16:30", act: "Panen herba di kebun" }
      ],
      img: "FOTO: domba di padang rumput berkabut"
    },
    stay: {
      tag: "Menginap", title: "Tidur di antara kabut dan bintang.",
      units: [
        { name: "Cottage Kabut", cap: "2 tamu", view: "Kebun & gunung", price: "Rp 850.000", per: "/malam", inc: "Termasuk sarapan farm-to-table & tungku hangat.", img: "FOTO: cottage kayu di tepi kebun" },
        { name: "Cottage Lembah", cap: "4 tamu", view: "City view malam", price: "Rp 1.250.000", per: "/malam", inc: "Teras luas menghadap kota, ideal untuk keluarga.", img: "FOTO: cottage dengan city view malam" },
        { name: "Loft Peternakan", cap: "2 tamu", view: "Dekat kandang", price: "Rp 750.000", per: "/malam", inc: "Bangun dengan suara ternak, untuk pecinta hewan.", img: "FOTO: loft kayu dekat peternakan" }
      ],
      cta: "Cek Ketersediaan"
    },
    gallery: { tag: "Galeri", title: "Sehari di BARKO.", items: [
      "FOTO: kabut pagi di kebun", "FOTO: secangkir kopi di teras", "FOTO: domba & kelinci", "FOTO: city view malam hari", "FOTO: matahari terbit di atas awan", "FOTO: interior kayu hangat", "FOTO: jalan setapak kebun", "FOTO: cottage saat senja" ] },
    events: {
      tag: "Paket Acara", title: "Rayakan dengan tenang.",
      items: [
        { t: "Gathering Kantor", d: "Ruang terbuka, sesi tim, dan kopi tanpa henti." },
        { t: "Prewedding & Foto", d: "Latar kabut, kebun, dan golden hour." },
        { t: "Retreat Akhir Pekan", d: "Menginap, yoga pagi, dan makan bersama." }
      ],
      cta: "Tanya Paket"
    },
    reservation: {
      tag: "Reservasi", title: "Amankan tempat Anda.",
      sub: "Isi formulir, lalu lanjutkan ke WhatsApp — pesan akan terisi otomatis.",
      typeTable: "Meja Restoran", typeCottage: "Cottage",
      fDate: "Tanggal", fTime: "Jam", fGuests: "Jumlah Tamu", fArea: "Area", fIndoor: "Indoor", fOutdoor: "Outdoor",
      fCheckin: "Check-in", fCheckout: "Check-out", fUnit: "Tipe Unit", fNotes: "Catatan khusus", fNotesPh: "Alergi, perayaan, kursi bayi…",
      submit: "Lanjutkan via WhatsApp", err: "Mohon lengkapi tanggal dan jumlah tamu terlebih dahulu."
    },
    location: {
      tag: "Lokasi & Akses", title: "Cara menuju ketenangan.",
      route: "± 2 jam dari Bandung, ± 3,5 jam dari Jakarta. Jalur menanjak dengan tikungan; gunakan kendaraan berkondisi baik.",
      parking: "Parkir: 40 mobil & 80 motor.",
      best: "Waktu terbaik", bestVal: "Sunrise 05.15–06.00 · Sunset 17.30–18.15.",
      temp: "Suhu", tempVal: "14–22°C. Bawa jaket hangat, terutama malam.",
      mapLabel: "PETA: sematkan Google Maps lokasi BARKO di sini"
    },
    faq: { tag: "FAQ", title: "Sebelum Anda datang.", items: [
      { q: "Apakah ramah anak?", a: "Sangat. Ada area peternakan dan kebun yang aman serta edukatif untuk anak." },
      { q: "Boleh bawa hewan peliharaan?", a: "Hewan peliharaan jinak diperbolehkan di area outdoor dengan tali. Mohon jaga jarak dari ternak." },
      { q: "Ramah lansia?", a: "Area utama dapat diakses dengan jalur landai. Beberapa titik kebun menanjak; pendamping disarankan." },
      { q: "Ada wifi dan sinyal?", a: "Wifi tersedia di area restoran. Sinyal seluler cukup, namun kami mengajak Anda sesekali melepas gawai." },
      { q: "Bagaimana kebijakan reservasi?", a: "Reservasi via WhatsApp. Pembatalan gratis hingga 24 jam sebelum kedatangan." },
      { q: "Sedingin apa? Bawa apa?", a: "14–22°C. Bawa jaket, sepatu nyaman, dan kamera untuk kabut pagi." }
    ] },
    footer: {
      hours: "Setiap hari 07.00 – 21.00", hoursLabel: "Jam Operasional",
      address: "ALAMAT: Jl. Placeholder, Kaki Gunung, Jawa Barat",
      wa: "WhatsApp", waNum: "+62 812-3456-7890",
      newsletter: "Promo musiman & info acara", newsBtn: "Langganan", newsPh: "Email Anda",
      rights: "Slow Living Experience", made: "Semua foto & harga adalah placeholder — mudah diganti."
    }
  },
  en: {
    nav: { about: "About", experience: "Experience", menu: "Menu", farm: "The Farm", stay: "Stay", gallery: "Gallery", events: "Events", location: "Location", faq: "FAQ", reserve: "Reserve" },
    hero: {
      kicker: "Barn and Koffee · 1000 masl",
      title: "Slow Living\nExperience",
      sub: "Coffee at the foot of the mountain, among morning mist, gardens, and the sounds of a farm. A place to slow down.",
      cta1: "Reserve Now", cta2: "Explore the Experience", scroll: "Scroll to begin"
    },
    about: {
      tag: "About BARKO",
      title: "A reason to breathe a little deeper.",
      body: "BARKO was born from the city's longing for cool air and green earth. At 1000 metres, coffee is brewed slowly, mist drifts through the gardens, and the city glimmers far below. Here, time is made slow on purpose.",
      loc: "Mountain foothills, West Java",
      values: [
        { t: "Close to Nature", d: "Gardens, mist, and farm animals as far as the eye sees." },
        { t: "Farm to Table", d: "Milk, eggs, and herbs picked from our own yard." },
        { t: "Stillness", d: "No rush. Only wind, green, and an easier breath." }
      ]
    },
    experience: {
      tag: "The Experience", title: "Five ways to slow down.",
      items: [
        { t: "City-View Coffee", d: "Brew slowly while the city lights flicker far below.", img: "PHOTO: coffee with dusk city view" },
        { t: "Sunrise & Sunset", d: "Skies change colour from a misty terrace.", img: "PHOTO: sunrise above the clouds" },
        { t: "Mountain Air", d: "Cool 1000m air, morning fog, a full silence.", img: "PHOTO: morning mist in the garden" },
        { t: "Meet the Animals", d: "Feed sheep and rabbits with the little ones.", img: "PHOTO: child feeding a sheep" },
        { t: "Wander the Garden", d: "Pick herbs, smell wet soil, slow your steps.", img: "PHOTO: herb and vegetable garden" }
      ]
    },
    menu: {
      tag: "Menu", title: "From the garden, to your cup.",
      note: "Much of what we serve comes straight from the BARKO farm and garden — farm to table, in the truest sense.",
      cats: [ { key: "kopi", label: "Coffee" }, { key: "nonkopi", label: "Non-Coffee" }, { key: "makanan", label: "Mains" }, { key: "camilan", label: "Snacks" } ],
      items: [
        { cat: "kopi", name: "Misty Coffee", desc: "Local espresso, farm milk, a touch of palm sugar.", price: "32K", sig: true },
        { cat: "kopi", name: "Cold Vietnam Drip", desc: "Bold robusta with condensed milk.", price: "30K", sig: false },
        { cat: "kopi", name: "Highland Americano", desc: "West Java single origin, long and clean.", price: "28K", sig: false },
        { cat: "kopi", name: "Palm Sugar Latte", desc: "Smooth latte sweetened with palm sugar.", price: "33K", sig: false },
        { cat: "nonkopi", name: "Mountain Chocolate", desc: "Hot chocolate with fresh farm milk.", price: "30K", sig: true },
        { cat: "nonkopi", name: "Lemongrass Honey Tea", desc: "Garden lemongrass, forest honey, warm.", price: "25K", sig: false },
        { cat: "nonkopi", name: "Misty Matcha", desc: "Soft matcha, fresh milk, thick foam.", price: "35K", sig: false },
        { cat: "makanan", name: "Barko Liwet Rice", desc: "Liwet rice, free-range chicken, sambal, greens.", price: "55K", sig: true },
        { cat: "makanan", name: "Wood-Smoked Pasta", desc: "Baked pasta, cream, earthy mushrooms.", price: "52K", sig: false },
        { cat: "makanan", name: "Warm Rib Soup", desc: "Clear rib broth, spices, for the cold air.", price: "60K", sig: false },
        { cat: "camilan", name: "Palm-Sugar Banana", desc: "Garden banana, palm sugar, milk butter.", price: "28K", sig: false },
        { cat: "camilan", name: "Farm Toast", desc: "Warm bread, butter from our fresh milk.", price: "26K", sig: false },
        { cat: "camilan", name: "Rosemary Fries", desc: "Crisp potatoes, garden rosemary, sea salt.", price: "27K", sig: false }
      ]
    },
    farm: {
      tag: "The Farm", title: "Come when the animals are fed.",
      body: "Sheep, rabbits, and free-range chickens live a few steps from your table. Children can feed them and meet them up close — a lesson in where food really comes from.",
      schedule: [
        { time: "07:00", act: "Feeding the sheep" },
        { time: "09:00", act: "Fresh milk & farm-to-table breakfast" },
        { time: "11:00", act: "Kids' session: meet the animals" },
        { time: "15:00", act: "Feeding the rabbits" },
        { time: "16:30", act: "Herb harvest in the garden" }
      ],
      img: "PHOTO: sheep in a misty meadow"
    },
    stay: {
      tag: "Stay", title: "Sleep among mist and stars.",
      units: [
        { name: "Mist Cottage", cap: "2 guests", view: "Garden & mountain", price: "Rp 850,000", per: "/night", inc: "Includes farm-to-table breakfast & a warm hearth.", img: "PHOTO: wooden cottage by the garden" },
        { name: "Valley Cottage", cap: "4 guests", view: "Night city view", price: "Rp 1,250,000", per: "/night", inc: "Wide terrace facing the city, ideal for families.", img: "PHOTO: cottage with night city view" },
        { name: "Farm Loft", cap: "2 guests", view: "Near the barn", price: "Rp 750,000", per: "/night", inc: "Wake to the sound of animals, for animal lovers.", img: "PHOTO: wooden loft near the farm" }
      ],
      cta: "Check Availability"
    },
    gallery: { tag: "Gallery", title: "A day at BARKO.", items: [
      "PHOTO: morning mist in the garden", "PHOTO: a cup of coffee on the terrace", "PHOTO: sheep & rabbits", "PHOTO: night city view", "PHOTO: sunrise above the clouds", "PHOTO: warm wooden interior", "PHOTO: garden footpath", "PHOTO: cottage at dusk" ] },
    events: {
      tag: "Event Packages", title: "Celebrate, quietly.",
      items: [
        { t: "Office Gathering", d: "Open space, team sessions, and endless coffee." },
        { t: "Prewedding & Photo", d: "Backdrops of mist, gardens, and golden hour." },
        { t: "Weekend Retreat", d: "Overnight stay, morning yoga, shared meals." }
      ],
      cta: "Ask About Packages"
    },
    reservation: {
      tag: "Reservation", title: "Secure your place.",
      sub: "Fill the form, then continue to WhatsApp — your message is filled in automatically.",
      typeTable: "Restaurant Table", typeCottage: "Cottage",
      fDate: "Date", fTime: "Time", fGuests: "Guests", fArea: "Area", fIndoor: "Indoor", fOutdoor: "Outdoor",
      fCheckin: "Check-in", fCheckout: "Check-out", fUnit: "Unit Type", fNotes: "Special notes", fNotesPh: "Allergies, celebration, baby chair…",
      submit: "Continue via WhatsApp", err: "Please complete the date and number of guests first."
    },
    location: {
      tag: "Location & Access", title: "How to reach the calm.",
      route: "± 2 hrs from Bandung, ± 3.5 hrs from Jakarta. Winding uphill roads; use a well-conditioned vehicle.",
      parking: "Parking: 40 cars & 80 motorbikes.",
      best: "Best time", bestVal: "Sunrise 05:15–06:00 · Sunset 17:30–18:15.",
      temp: "Temperature", tempVal: "14–22°C. Bring a warm jacket, especially at night.",
      mapLabel: "MAP: embed BARKO's Google Maps location here"
    },
    faq: { tag: "FAQ", title: "Before you come.", items: [
      { q: "Is it child-friendly?", a: "Very. There's a safe, educational farm and garden area for children." },
      { q: "Can I bring pets?", a: "Gentle pets are welcome in outdoor areas on a leash. Please keep distance from the livestock." },
      { q: "Is it senior-friendly?", a: "Main areas are accessible via gentle ramps. Some garden paths climb; a companion is advised." },
      { q: "Is there wifi and signal?", a: "Wifi is available in the restaurant. Mobile signal is decent, but we invite you to unplug now and then." },
      { q: "What's the reservation policy?", a: "Reserve via WhatsApp. Free cancellation up to 24 hours before arrival." },
      { q: "How cold is it? What to bring?", a: "14–22°C. Bring a jacket, comfy shoes, and a camera for the morning mist." }
    ] },
    footer: {
      hours: "Daily 07:00 – 21:00", hoursLabel: "Opening Hours",
      address: "ADDRESS: Jl. Placeholder, Mountain Foothills, West Java",
      wa: "WhatsApp", waNum: "+62 812-3456-7890",
      newsletter: "Seasonal offers & event news", newsBtn: "Subscribe", newsPh: "Your email",
      rights: "Slow Living Experience", made: "All photos & prices are placeholders — easy to replace."
    }
  }
};
