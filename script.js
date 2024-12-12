function showConsultationForm() {
    hideAllSections();
    document.getElementById('consultation').classList.remove('hidden');
}

function showGeneralOrderForm() {
    hideAllSections();
    document.getElementById('generalOrder').classList.remove('hidden');
}

function showPrescriptionForm() {
    hideAllSections();
    document.getElementById('prescription').classList.remove('hidden');
}

function showMedicineInfo() {
    hideAllSections();
    document.getElementById('medicineInfo').classList.remove('hidden');
}

function hideAllSections() {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
}

document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('consultName').value;
    const issue = document.getElementById('consultIssue').value;
    document.getElementById('consultationMessage').innerText = `Terima kasih, ${name}. Keluhan Anda "${issue}" telah diterima.`;
    this.reset();
});

document.getElementById('generalOrderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('generalName').value;
    const quantity = document.getElementById('generalQuantity').value;
    const complaint = document.getElementById('generalComplaint').value;
    document.getElementById('generalOrderMessage').innerText = `Pesanan obat "${name}" sebanyak ${quantity} berhasil dibuat. Keluhan: "${complaint}".`;
    this.reset();
});

document.getElementById('prescriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const file = document.getElementById('prescriptionFile').value;
    const complaint = document.getElementById('prescriptionComplaint').value;
    document.getElementById('prescriptionMessage').innerText = `Resep (${file}) telah diunggah. Keluhan: "${complaint}".`;
    this.reset();
});

const medicineDatabase = {
    paracetamol: {
        name: "Paracetamol",
        function: "Menurunkan demam dan meredakan nyeri.",
        dosage: "500 mg setiap 4-6 jam, maksimal 4 gram sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Tidak untuk penderita gangguan hati berat.",
        forms: "Tablet, Sirup, Suppositoria."
    },
    ibuprofen: {
        name: "Ibuprofen",
        function: "Meredakan nyeri, peradangan, dan demam.",
        dosage: "200-400 mg setiap 4-6 jam, maksimal 1200 mg sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Hindari pada penderita ulkus lambung.",
        forms: "Tablet, Sirup."
    },
    amoxicillin: {
        name: "Amoxicillin",
        function: "Mengobati infeksi bakteri seperti infeksi saluran pernapasan.",
        dosage: "250-500 mg setiap 8 jam.",
        usage: "Diminum sebelum atau setelah makan.",
        contraindications: "Alergi terhadap penisilin.",
        forms: "Kapsul, Tablet, Sirup."
    },
    cetirizine: {
        name: "Cetirizine",
        function: "Mengatasi gejala alergi seperti gatal dan pilek.",
        dosage: "10 mg sekali sehari.",
        usage: "Diminum sebelum tidur.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet, Sirup."
    },
    salbutamol: {
        name: "Salbutamol",
        function: "Meredakan bronkospasme pada asma.",
        dosage: "100-200 mcg melalui inhalasi.",
        usage: "Gunakan inhaler sesuai petunjuk.",
        contraindications: "Gangguan jantung berat.",
        forms: "Inhaler, Tablet."
    },
    ranitidine: {
        name: "Ranitidine",
        function: "Mengurangi produksi asam lambung.",
        dosage: "150 mg dua kali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Riwayat alergi terhadap ranitidine.",
        forms: "Tablet, Sirup."
    },
    alprazolam: {
        name: "Alprazolam",
        function: "Mengatasi gangguan kecemasan.",
        dosage: "0.25-0.5 mg tiga kali sehari.",
        usage: "Diminum sesuai resep.",
        contraindications: "Riwayat penyalahgunaan obat.",
        forms: "Tablet."
    },
    loratadine: {
        name: "Loratadine",
        function: "Mengatasi gejala alergi.",
        dosage: "10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan dan menyusui.",
        forms: "Tablet, Sirup."
    },
    metformin: {
        name: "Metformin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "500-1000 mg dua kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Gagal ginjal kronis.",
        forms: "Tablet."
    },
    furosemide: {
        name: "Furosemide",
        function: "Mengatasi retensi cairan akibat gagal jantung.",
        dosage: "20-80 mg sekali sehari.",
        usage: "Diminum pagi hari.",
        contraindications: "Dehidrasi berat.",
        forms: "Tablet, Injeksi."
    },
    omeprazole: {
        name: "Omeprazole",
        function: "Mengurangi produksi asam lambung.",
        dosage: "20-40 mg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Alergi terhadap omeprazole.",
        forms: "Tablet, Kapsul."
    },
    atorvastatin: {
        name: "Atorvastatin",
        function: "Menurunkan kadar kolesterol LDL.",
        dosage: "10-80 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Penyakit hati aktif.",
        forms: "Tablet."
    },
    aspirin: {
        name: "Aspirin",
        function: "Mengurangi nyeri, demam, dan mencegah penggumpalan darah.",
        dosage: "75-325 mg sekali sehari (untuk profilaksis).",
        usage: "Diminum setelah makan.",
        contraindications: "Ulkus lambung aktif.",
        forms: "Tablet."
    },
    clopidogrel: {
        name: "Clopidogrel",
        function: "Mencegah penggumpalan darah.",
        dosage: "75 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan perdarahan aktif.",
        forms: "Tablet."
    },
    simvastatin: {
        name: "Simvastatin",
        function: "Menurunkan kadar kolesterol LDL.",
        dosage: "10-40 mg sekali sehari.",
        usage: "Diminum malam hari.",
        contraindications: "Penyakit hati aktif.",
        forms: "Tablet."
    },
    amlodipine: {
        name: "Amlodipine",
        function: "Mengontrol tekanan darah tinggi.",
        dosage: "5-10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan jantung berat.",
        forms: "Tablet."
    },
    bisoprolol: {
        name: "Bisoprolol",
        function: "Mengontrol tekanan darah tinggi dan gagal jantung.",
        dosage: "2.5-10 mg sekali sehari.",
        usage: "Diminum pagi hari.",
        contraindications: "Bradikardia berat.",
        forms: "Tablet."
    },
    captopril: {
        name: "Captopril",
        function: "Mengontrol tekanan darah tinggi.",
        dosage: "12.5-50 mg dua kali sehari.",
        usage: "Diminum satu jam sebelum makan.",
        contraindications: "Riwayat angioedema.",
        forms: "Tablet."
    },
    digoxin: {
        name: "Digoxin",
        function: "Mengobati gagal jantung dan aritmia.",
        dosage: "0.125-0.25 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Fibrilasi ventrikel.",
        forms: "Tablet."
    },
    enalapril: {
        name: "Enalapril",
        function: "Mengontrol tekanan darah tinggi.",
        dosage: "5-20 mg sekali atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Riwayat angioedema.",
        forms: "Tablet."
    },
    fexofenadine: {
        name: "Fexofenadine",
        function: "Mengatasi gejala alergi.",
        dosage: "120-180 mg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet."
    },
    gabapentin: {
        name: "Gabapentin",
        function: "Mengobati nyeri neuropatik dan epilepsi.",
        dosage: "300-600 mg tiga kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap gabapentin.",
        forms: "Tablet, Kapsul."
    },
    hydrochlorothiazide: {
        name: "Hydrochlorothiazide",
        function: "Mengurangi tekanan darah dan retensi cairan.",
        dosage: "25-50 mg sekali sehari.",
        usage: "Diminum pagi hari.",
        contraindications: "Anuria.",
        forms: "Tablet."
    },
    losartan: {
        name: "Losartan",
        function: "Mengontrol tekanan darah tinggi.",
        dosage: "50-100 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    spironolactone: {
        name: "Spironolactone",
        function: "Mengobati hipertensi dan gagal jantung.",
        dosage: "25-100 mg sekali sehari.",
        usage: "Diminum pagi hari.",
        contraindications: "Hiperkalemia.",
        forms: "Tablet."
    },
    allopurinol: {
        name: "Allopurinol",
        function: "Mengurangi kadar asam urat dalam darah.",
        dosage: "100-300 mg sekali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Serangan gout akut.",
        forms: "Tablet."
    },
    methylprednisolone: {
        name: "Methylprednisolone",
        function: "Mengatasi peradangan dan reaksi alergi.",
        dosage: "4-48 mg sehari (sesuai kondisi).",
        usage: "Diminum pagi hari.",
        contraindications: "Infeksi sistemik tanpa terapi antimikroba.",
        forms: "Tablet, Injeksi."
    },
    prednisone: {
        name: "Prednisone",
        function: "Mengatasi peradangan dan reaksi alergi.",
        dosage: "5-60 mg sehari (sesuai kondisi).",
        usage: "Diminum pagi hari.",
        contraindications: "Infeksi jamur sistemik.",
        forms: "Tablet."
    },
    dexamethasone: {
        name: "Dexamethasone",
        function: "Mengatasi peradangan dan reaksi alergi.",
        dosage: "0.5-10 mg sehari (sesuai kondisi).",
        usage: "Diminum kapan saja.",
        contraindications: "Infeksi jamur sistemik.",
        forms: "Tablet, Injeksi."
    },
    levothyroxine: {
        name: "Levothyroxine",
        function: "Mengobati hipotiroidisme.",
        dosage: "25-200 mcg sekali sehari.",
        usage: "Diminum pagi hari sebelum makan.",
        contraindications: "Tirotoksikosis tidak terkontrol.",
        forms: "Tablet."
    },
    warfarin: {
        name: "Warfarin",
        function: "Mencegah dan mengobati penggumpalan darah.",
        dosage: "2-10 mg sekali sehari.",
        usage: "Diminum pada waktu yang sama setiap hari.",
        contraindications: "Perdarahan aktif.",
        forms: "Tablet."
    },
    metoprolol: {
        name: "Metoprolol",
        function: "Mengontrol tekanan darah tinggi dan angina.",
        dosage: "50-100 mg dua kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Bradikardia berat.",
        forms: "Tablet."
    },
    carvedilol: {
        name: "Carvedilol",
        function: "Mengontrol tekanan darah tinggi dan gagal jantung.",
        dosage: "6.25-25 mg dua kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Gangguan hati berat.",
        forms: "Tablet."
    },
    glimepiride: {
        name: "Glimepiride",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "1-4 mg sekali sehari.",
        usage: "Diminum sebelum sarapan.",
        contraindications: "Ketoasidosis diabetik.",
        forms: "Tablet."
    },
    pioglitazone: {
        name: "Pioglitazone",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "15-45 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gagal jantung berat.",
        forms: "Tablet."
    },
    insulin: {
        name: "Insulin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 1 dan tipe 2.",
        dosage: "Sesuai kebutuhan pasien (dosis individual).",
        usage: "Disuntikkan di bawah kulit.",
        contraindications: "Hipoglikemia.",
        forms: "Injeksi."
    },
    diazepam: {
        name: "Diazepam",
        function: "Mengatasi kecemasan dan kejang.",
        dosage: "2-10 mg dua hingga empat kali sehari.",
        usage: "Diminum sesuai resep.",
        contraindications: "Miastenia gravis.",
        forms: "Tablet, Injeksi."
    },
    clonazepam: {
        name: "Clonazepam",
        function: "Mengobati epilepsi dan gangguan panik.",
        dosage: "0.5-2 mg dua hingga tiga kali sehari.",
        usage: "Diminum sesuai resep.",
        contraindications: "Hipersensitivitas terhadap benzodiazepin.",
        forms: "Tablet."
    },
    risperidone: {
        name: "Risperidone",
        function: "Mengobati skizofrenia dan gangguan bipolar.",
        dosage: "1-6 mg sekali atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Dementia dengan gangguan perilaku.",
        forms: "Tablet, Cairan oral."
    },
    quetiapine: {
        name: "Quetiapine",
        function: "Mengobati skizofrenia dan gangguan bipolar.",
        dosage: "25-800 mg sehari (tergantung kondisi).",
        usage: "Diminum sesuai jadwal.",
        contraindications: "Hipersensitivitas terhadap quetiapine.",
        forms: "Tablet."
    },
    sertraline: {
        name: "Sertraline",
        function: "Mengobati depresi, gangguan kecemasan, dan PTSD.",
        dosage: "25-200 mg sekali sehari.",
        usage: "Diminum pagi atau malam hari.",
        contraindications: "Penggunaan bersama MAOI.",
        forms: "Tablet."
    },
    fluoxetine: {
        name: "Fluoxetine",
        function: "Mengobati depresi, gangguan obsesif-kompulsif, dan bulimia.",
        dosage: "20-60 mg sekali sehari.",
        usage: "Diminum pagi hari.",
        contraindications: "Penggunaan bersama MAOI.",
        forms: "Kapsul, Cairan oral."
    },
    escitalopram: {
        name: "Escitalopram",
        function: "Mengobati depresi dan gangguan kecemasan.",
        dosage: "10-20 mg sekali sehari.",
        usage: "Diminum pagi atau malam hari.",
        contraindications: "Penggunaan bersama MAOI.",
        forms: "Tablet."
    },
    omeprazole: {
        name: "Omeprazole",
        function: "Mengurangi produksi asam lambung.",
        dosage: "20-40 mg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Hipersensitivitas terhadap omeprazole.",
        forms: "Tablet, Kapsul."
    },
    pantoprazole: {
        name: "Pantoprazole",
        function: "Mengurangi produksi asam lambung.",
        dosage: "20-40 mg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Hipersensitivitas terhadap pantoprazole.",
        forms: "Tablet."
    },
    ranitidine: {
        name: "Ranitidine",
        function: "Mengurangi produksi asam lambung.",
        dosage: "150 mg dua kali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Hipersensitivitas terhadap ranitidine.",
        forms: "Tablet, Sirup."
    },
    ketorolac: {
        name: "Ketorolac",
        function: "Meredakan nyeri sedang hingga berat.",
        dosage: "10-30 mg setiap 4-6 jam.",
        usage: "Diminum atau disuntikkan sesuai kebutuhan.",
        contraindications: "Ulkus lambung aktif.",
        forms: "Tablet, Injeksi."
    },
    diclofenac: {
        name: "Diclofenac",
        function: "Meredakan nyeri dan peradangan.",
        dosage: "50-75 mg dua hingga tiga kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Riwayat ulkus lambung.",
        forms: "Tablet, Gel."
    },
    tramadol: {
        name: "Tramadol",
        function: "Meredakan nyeri sedang hingga berat.",
        dosage: "50-100 mg setiap 4-6 jam.",
        usage: "Diminum sesuai resep.",
        contraindications: "Gangguan napas akut.",
        forms: "Tablet, Kapsul."
    },
    cyclobenzaprine: {
        name: "Cyclobenzaprine",
        function: "Mengatasi kejang otot.",
        dosage: "10 mg tiga kali sehari.",
        usage: "Diminum sesuai resep.",
        contraindications: "Gagal jantung.",
        forms: "Tablet."
    },
    ceftriaxone: {
        name: "Ceftriaxone",
        function: "Mengobati infeksi bakteri berat seperti meningitis.",
        dosage: "1-2 gram sekali sehari.",
        usage: "Disuntikkan sesuai instruksi medis.",
        contraindications: "Alergi terhadap sefalosporin.",
        forms: "Injeksi."
    },
    azithromycin: {
        name: "Azithromycin",
        function: "Mengobati infeksi bakteri seperti infeksi saluran pernapasan.",
        dosage: "500 mg sekali sehari selama 3-5 hari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Gangguan hati berat.",
        forms: "Tablet, Sirup."
    },
    ciprofloxacin: {
        name: "Ciprofloxacin",
        function: "Mengobati infeksi bakteri seperti infeksi saluran kemih.",
        dosage: "250-750 mg dua kali sehari.",
        usage: "Diminum sebelum atau setelah makan.",
        contraindications: "Kehamilan dan menyusui.",
        forms: "Tablet, Infus."
    },
    doxycycline: {
        name: "Doxycycline",
        function: "Mengobati infeksi bakteri seperti jerawat dan infeksi kulit.",
        dosage: "100 mg dua kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Anak di bawah usia 8 tahun.",
        forms: "Kapsul, Tablet."
    },
    clindamycin: {
        name: "Clindamycin",
        function: "Mengobati infeksi bakteri anaerob.",
        dosage: "150-450 mg empat kali sehari.",
        usage: "Diminum sebelum atau setelah makan.",
        contraindications: "Kolitis pseudomembran.",
        forms: "Kapsul, Injeksi."
    },
    metronidazole: {
        name: "Metronidazole",
        function: "Mengobati infeksi bakteri anaerob dan parasit.",
        dosage: "500 mg tiga kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Kehamilan trimester pertama.",
        forms: "Tablet, Injeksi."
    },
    levofloxacin: {
        name: "Levofloxacin",
        function: "Mengobati infeksi bakteri seperti pneumonia.",
        dosage: "500-750 mg sekali sehari.",
        usage: "Diminum sebelum atau setelah makan.",
        contraindications: "Epilepsi.",
        forms: "Tablet, Infus."
    },
    vancomycin: {
        name: "Vancomycin",
        function: "Mengobati infeksi bakteri berat seperti MRSA.",
        dosage: "15-20 mg/kg setiap 8-12 jam.",
        usage: "Disuntikkan sesuai instruksi medis.",
        contraindications: "Hipersensitivitas terhadap vancomycin.",
        forms: "Injeksi."
    },
    rifampicin: {
        name: "Rifampicin",
        function: "Mengobati tuberkulosis (TBC).",
        dosage: "10 mg/kg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Penyakit hati aktif.",
        forms: "Kapsul."
    },
    isoniazid: {
        name: "Isoniazid",
        function: "Mengobati dan mencegah tuberkulosis (TBC).",
        dosage: "5 mg/kg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Penyakit hati aktif.",
        forms: "Tablet."
    },
    ethambutol: {
        name: "Ethambutol",
        function: "Mengobati tuberkulosis (TBC).",
        dosage: "15-25 mg/kg sekali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Neuritis optik.",
        forms: "Tablet."
    },
    pyrazinamide: {
        name: "Pyrazinamide",
        function: "Mengobati tuberkulosis (TBC).",
        dosage: "15-30 mg/kg sekali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Penyakit hati berat.",
        forms: "Tablet."
    },
    ketoconazole: {
        name: "Ketoconazole",
        function: "Mengobati infeksi jamur pada kulit.",
        dosage: "200-400 mg sekali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Penyakit hati aktif.",
        forms: "Tablet."
    },
    fluconazole: {
        name: "Fluconazole",
        function: "Mengobati infeksi jamur sistemik.",
        dosage: "150 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap fluconazole.",
        forms: "Kapsul."
    },
    itraconazole: {
        name: "Itraconazole",
        function: "Mengobati infeksi jamur sistemik.",
        dosage: "200 mg sekali atau dua kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Gangguan hati berat.",
        forms: "Kapsul."
    },
    acyclovir: {
        name: "Acyclovir",
        function: "Mengobati infeksi virus herpes.",
        dosage: "200-800 mg lima kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet, Salep."
    },
    valacyclovir: {
        name: "Valacyclovir",
        function: "Mengobati infeksi virus herpes.",
        dosage: "500-1000 mg dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet."
    },
    oseltamivir: {
        name: "Oseltamivir",
        function: "Mengobati dan mencegah influenza.",
        dosage: "75 mg dua kali sehari selama 5 hari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap oseltamivir.",
        forms: "Kapsul."
    },
    lamivudine: {
        name: "Lamivudine",
        function: "Mengobati infeksi HIV dan hepatitis B.",
        dosage: "300 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap lamivudine.",
        forms: "Tablet."
    },
    tenofovir: {
        name: "Tenofovir",
        function: "Mengobati infeksi HIV dan hepatitis B.",
        dosage: "300 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet."
    },
    streptomycin: {
        name: "Streptomycin",
        function: "Mengobati tuberkulosis (TBC) sebagai lini kedua.",
        dosage: "15 mg/kg sekali sehari (maksimal 1 gram).",
        usage: "Disuntikkan secara intramuskular.",
        contraindications: "Gangguan pendengaran.",
        forms: "Injeksi."
    },
    capreomycin: {
        name: "Capreomycin",
        function: "Mengobati tuberkulosis yang resistan terhadap obat.",
        dosage: "15-20 mg/kg sekali sehari.",
        usage: "Disuntikkan secara intramuskular.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Injeksi."
    },
    amikacin: {
        name: "Amikacin",
        function: "Mengobati tuberkulosis yang resistan terhadap obat.",
        dosage: "15 mg/kg sekali sehari.",
        usage: "Disuntikkan secara intramuskular atau intravena.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Injeksi."
    },
    ethionamide: {
        name: "Ethionamide",
        function: "Mengobati tuberkulosis yang resistan terhadap obat.",
        dosage: "250-500 mg dua kali sehari.",
        usage: "Diminum setelah makan.",
        contraindications: "Penyakit hati aktif.",
        forms: "Tablet."
    },
    cycloserine: {
        name: "Cycloserine",
        function: "Mengobati tuberkulosis yang resistan terhadap obat.",
        dosage: "500-1000 mg per hari dalam dua dosis.",
        usage: "Diminum setelah makan.",
        contraindications: "Gangguan kejiwaan aktif.",
        forms: "Tablet."
    },
    linezolid: {
        name: "Linezolid",
        function: "Mengobati tuberkulosis resistan multi-obat (MDR-TB).",
        dosage: "600 mg sekali sehari.",
        usage: "Diminum sebelum atau setelah makan.",
        contraindications: "Penggunaan bersama MAOI.",
        forms: "Tablet, Infus."
    },
    bedaquiline: {
        name: "Bedaquiline",
        function: "Mengobati tuberkulosis resistan multi-obat (MDR-TB).",
        dosage: "400 mg sekali sehari selama 2 minggu, kemudian 200 mg tiga kali seminggu.",
        usage: "Diminum bersama makanan.",
        contraindications: "Gangguan jantung berat.",
        forms: "Tablet."
    },
    delamanid: {
        name: "Delamanid",
        function: "Mengobati tuberkulosis resistan multi-obat (MDR-TB).",
        dosage: "100 mg dua kali sehari.",
        usage: "Diminum sebelum atau setelah makan.",
        contraindications: "Hipersensitivitas terhadap delamanid.",
        forms: "Tablet."
    },
    kanamycin: {
        name: "Kanamycin",
        function: "Mengobati tuberkulosis yang resistan terhadap obat.",
        dosage: "15 mg/kg sekali sehari.",
        usage: "Disuntikkan secara intramuskular.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Injeksi."
    },
    prothionamide: {
        name: "Prothionamide",
        function: "Mengobati tuberkulosis yang resistan terhadap obat.",
        dosage: "15-20 mg/kg per hari.",
        usage: "Diminum setelah makan.",
        contraindications: "Penyakit hati berat.",
        forms: "Tablet."
    },
    sitagliptin: {
        name: "Sitagliptin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "100 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap sitagliptin.",
        forms: "Tablet."
    },
    linagliptin: {
        name: "Linagliptin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "5 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap linagliptin.",
        forms: "Tablet."
    },
    vildagliptin: {
        name: "Vildagliptin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "50 mg satu atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan hati berat.",
        forms: "Tablet."
    },
    dapagliflozin: {
        name: "Dapagliflozin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet."
    },
    empagliflozin: {
        name: "Empagliflozin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "10-25 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet."
    },
    canagliflozin: {
        name: "Canagliflozin",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "100-300 mg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Gangguan ginjal berat.",
        forms: "Tablet."
    },
    glipizide: {
        name: "Glipizide",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "5-20 mg sekali atau dua kali sehari.",
        usage: "Diminum 30 menit sebelum makan.",
        contraindications: "Ketoasidosis diabetik.",
        forms: "Tablet."
    },
    glyburide: {
        name: "Glyburide",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "1.25-20 mg sekali sehari.",
        usage: "Diminum bersama sarapan.",
        contraindications: "Ketoasidosis diabetik.",
        forms: "Tablet."
    },
    rosiglitazone: {
        name: "Rosiglitazone",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "4-8 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gagal jantung berat.",
        forms: "Tablet."
    },
    repaglinide: {
        name: "Repaglinide",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "0.5-4 mg sebelum makan.",
        usage: "Diminum 15 menit sebelum makan.",
        contraindications: "Ketoasidosis diabetik.",
        forms: "Tablet."
    },
    nateglinide: {
        name: "Nateglinide",
        function: "Mengontrol kadar gula darah pada diabetes tipe 2.",
        dosage: "60-120 mg sebelum makan.",
        usage: "Diminum 30 menit sebelum makan.",
        contraindications: "Ketoasidosis diabetik.",
        forms: "Tablet."
    },
    captopril: {
        name: "Captopril",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "25-100 mg dua atau tiga kali sehari.",
        usage: "Diminum 1 jam sebelum makan.",
        contraindications: "Angioedema terkait penggunaan ACE inhibitor.",
        forms: "Tablet."
    },
    enalapril: {
        name: "Enalapril",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "5-40 mg sekali atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Riwayat angioedema.",
        forms: "Tablet."
    },
    lisinopril: {
        name: "Lisinopril",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "10-40 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Riwayat angioedema.",
        forms: "Tablet."
    },
    ramipril: {
        name: "Ramipril",
        function: "Menurunkan tekanan darah dan mengurangi risiko kardiovaskular.",
        dosage: "2.5-10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Riwayat angioedema.",
        forms: "Tablet."
    },
    perindopril: {
        name: "Perindopril",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "4-8 mg sekali sehari.",
        usage: "Diminum sebelum makan.",
        contraindications: "Angioedema terkait ACE inhibitor.",
        forms: "Tablet."
    },
    amlodipine: {
        name: "Amlodipine",
        function: "Menurunkan tekanan darah dan mengatasi angina.",
        dosage: "5-10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Syok kardiogenik.",
        forms: "Tablet."
    },
    nifedipine: {
        name: "Nifedipine",
        function: "Menurunkan tekanan darah dan mengatasi angina.",
        dosage: "30-60 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Stenosis aorta berat.",
        forms: "Tablet lepas lambat."
    },
    felodipine: {
        name: "Felodipine",
        function: "Menurunkan tekanan darah.",
        dosage: "5-10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Stenosis aorta berat.",
        forms: "Tablet lepas lambat."
    },
    diltiazem: {
        name: "Diltiazem",
        function: "Menurunkan tekanan darah dan mengatasi angina.",
        dosage: "120-360 mg sekali atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Blok atrioventrikular derajat 2 atau 3.",
        forms: "Tablet, Kapsul lepas lambat."
    },
    verapamil: {
        name: "Verapamil",
        function: "Menurunkan tekanan darah dan mengatasi aritmia.",
        dosage: "120-360 mg sekali atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Blok atrioventrikular derajat 2 atau 3.",
        forms: "Tablet, Kapsul lepas lambat."
    },
    losartan: {
        name: "Losartan",
        function: "Menurunkan tekanan darah dan melindungi ginjal pada diabetes.",
        dosage: "50-100 mg sekali atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    valsartan: {
        name: "Valsartan",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "80-320 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    irbesartan: {
        name: "Irbesartan",
        function: "Menurunkan tekanan darah dan melindungi ginjal pada diabetes.",
        dosage: "150-300 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    telmisartan: {
        name: "Telmisartan",
        function: "Menurunkan tekanan darah dan mengurangi risiko kardiovaskular.",
        dosage: "40-80 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    candesartan: {
        name: "Candesartan",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "8-32 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    hydrochlorothiazide: {
        name: "Hydrochlorothiazide",
        function: "Menurunkan tekanan darah dengan mengurangi cairan tubuh.",
        dosage: "12.5-50 mg sekali sehari.",
        usage: "Diminum pagi hari.",
        contraindications: "Anuria.",
        forms: "Tablet."
    },
    chlorthalidone: {
        name: "Chlorthalidone",
        function: "Menurunkan tekanan darah dengan mengurangi cairan tubuh.",
        dosage: "12.5-25 mg sekali sehari.",
        usage: "Diminum pagi hari.",
        contraindications: "Anuria.",
        forms: "Tablet."
    },
    spironolactone: {
        name: "Spironolactone",
        function: "Menurunkan tekanan darah dan mengatasi edema.",
        dosage: "25-100 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hiperkalemia.",
        forms: "Tablet."
    },
    eplerenone: {
        name: "Eplerenone",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "25-50 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hiperkalemia.",
        forms: "Tablet."
    },
    propranolol: {
        name: "Propranolol",
        function: "Menurunkan tekanan darah dan mengatasi migrain.",
        dosage: "40-320 mg per hari dalam dua atau tiga dosis.",
        usage: "Diminum kapan saja.",
        contraindications: "Asma berat.",
        forms: "Tablet."
    },
    atenolol: {
        name: "Atenolol",
        function: "Menurunkan tekanan darah dan mengatasi angina.",
        dosage: "25-100 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Blok jantung derajat 2 atau 3.",
        forms: "Tablet."
    },
    bisoprolol: {
        name: "Bisoprolol",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "2.5-10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Blok jantung derajat 2 atau 3.",
        forms: "Tablet."
    },
    carvedilol: {
        name: "Carvedilol",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung.",
        dosage: "12.5-50 mg per hari dalam dua dosis.",
        usage: "Diminum kapan saja.",
        contraindications: "Blok jantung derajat 2 atau 3.",
        forms: "Tablet."
    },
    nebivolol: {
        name: "Nebivolol",
        function: "Menurunkan tekanan darah dan mengatasi gagal jantung ringan hingga sedang.",
        dosage: "5-10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Blok jantung derajat 2 atau 3.",
        forms: "Tablet."
    },
    esmolol: {
        name: "Esmolol",
        function: "Menurunkan tekanan darah dengan cepat pada keadaan darurat.",
        dosage: "50-200 mcg/kg/menit melalui infus.",
        usage: "Disuntikkan secara intravena.",
        contraindications: "Blok jantung derajat 2 atau 3.",
        forms: "Injeksi."
    },
    methyldopa: {
        name: "Methyldopa",
        function: "Menurunkan tekanan darah, terutama pada kehamilan.",
        dosage: "250-1000 mg dua atau tiga kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Penyakit hati aktif.",
        forms: "Tablet."
    },
    clonidine: {
        name: "Clonidine",
        function: "Menurunkan tekanan darah dan mengatasi gejala penghentian opioid.",
        dosage: "0.1-0.8 mg sekali atau dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Gangguan fungsi hati berat.",
        forms: "Tablet, Patch transdermal."
    },
    aliskiren: {
        name: "Aliskiren",
        function: "Menurunkan tekanan darah dengan menghambat renin.",
        dosage: "150-300 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    terazosin: {
        name: "Terazosin",
        function: "Menurunkan tekanan darah dan mengatasi pembesaran prostat.",
        dosage: "1-20 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap terazosin.",
        forms: "Tablet."
    },
    doxazosin: {
        name: "Doxazosin",
        function: "Menurunkan tekanan darah dan mengatasi pembesaran prostat.",
        dosage: "1-8 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap doxazosin.",
        forms: "Tablet."
    },
    prazosin: {
        name: "Prazosin",
        function: "Menurunkan tekanan darah dan mengatasi pembesaran prostat.",
        dosage: "1-5 mg dua atau tiga kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Hipersensitivitas terhadap prazosin.",
        forms: "Tablet."
    },
    minoxidil: {
        name: "Minoxidil",
        function: "Menurunkan tekanan darah pada hipertensi berat yang resistan.",
        dosage: "5-100 mg sehari dalam dua atau tiga dosis.",
        usage: "Diminum kapan saja.",
        contraindications: "Feokromositoma.",
        forms: "Tablet."
    },
    hydralazine: {
        name: "Hydralazine",
        function: "Menurunkan tekanan darah pada hipertensi berat dan gagal jantung.",
        dosage: "10-50 mg empat kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Lupus eritematosus aktif.",
        forms: "Tablet, Injeksi."
    },
    nicardipine: {
        name: "Nicardipine",
        function: "Menurunkan tekanan darah pada keadaan darurat hipertensi.",
        dosage: "5-15 mg/jam melalui infus.",
        usage: "Disuntikkan secara intravena.",
        contraindications: "Stenosis aorta berat.",
        forms: "Injeksi."
    },
    clevidipine: {
        name: "Clevidipine",
        function: "Menurunkan tekanan darah secara cepat pada keadaan darurat hipertensi.",
        dosage: "1-32 mg/jam melalui infus.",
        usage: "Disuntikkan secara intravena.",
        contraindications: "Alergi terhadap kedelai atau telur.",
        forms: "Injeksi."
    },
    fenoldopam: {
        name: "Fenoldopam",
        function: "Menurunkan tekanan darah pada keadaan darurat hipertensi.",
        dosage: "0.1-0.3 mcg/kg/menit melalui infus.",
        usage: "Disuntikkan secara intravena.",
        contraindications: "Glaukoma.",
        forms: "Injeksi."
    },
    labetalol: {
        name: "Labetalol",
        function: "Menurunkan tekanan darah pada hipertensi berat atau keadaan darurat.",
        dosage: "100-400 mg dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Asma berat.",
        forms: "Tablet, Injeksi."
    },
    bosentan: {
        name: "Bosentan",
        function: "Menurunkan tekanan darah pada hipertensi arteri pulmonal.",
        dosage: "62.5-125 mg dua kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    macitentan: {
        name: "Macitentan",
        function: "Menurunkan tekanan darah pada hipertensi arteri pulmonal.",
        dosage: "10 mg sekali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    },
    riociguat: {
        name: "Riociguat",
        function: "Menurunkan tekanan darah pada hipertensi arteri pulmonal.",
        dosage: "1-2.5 mg tiga kali sehari.",
        usage: "Diminum kapan saja.",
        contraindications: "Kehamilan.",
        forms: "Tablet."
    }
    
    // Tambahkan 40 obat lagi di sini...
};
    
// Tambahkan obat tambahan
for (let i = 11; i <= 50; i++) {
    medicineDatabase[`obat${i}`] = {
        name: `Obat ${i}`,
        function: `Fungsi obat ${i}.`,
        dosage: `Dosis obat ${i}.`,
        usage: `Cara pemakaian obat ${i}.`,
        contraindications: `Kontraindikasi obat ${i}.`,
        forms: `Bentuk sediaan obat ${i}.`
    };
}

// Fungsi pencarian obat
function searchMedicine() {
    const medicineName = document.getElementById('medicineSearch').value.toLowerCase();
    const medicine = medicineDatabase[medicineName];
    const resultDiv = document.getElementById('medicineResult');

    if (medicine) {
        resultDiv.innerHTML = `
            <h3>${medicine.name}</h3>
            <p><strong>Fungsi:</strong> ${medicine.function}</p>
            <p><strong>Dosis:</strong> ${medicine.dosage}</p>
            <p><strong>Cara Pemakaian:</strong> ${medicine.usage}</p>
            <p><strong>Kontraindikasi:</strong> ${medicine.contraindications}</p>
            <p><strong>Bentuk Sediaan:</strong> ${medicine.forms}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>Informasi obat tidak ditemukan. Silakan coba nama obat lain.</p>";
    }
}

function showAbout() {
    hideAllSections();
    document.getElementById('about').classList.remove('hidden');
}

function showContact() {
    hideAllSections();
    document.getElementById('contact').classList.remove('hidden');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const section = this.getAttribute('href').substring(1);
        if (section === 'about') {
            showAbout();
        } else if (section === 'contact') {
            showContact();
        } else if (section === 'home') {
            hideAllSections();
            document.querySelector('.hero').classList.remove('hidden');
        } else if (section === 'services') {
            hideAllSections();
            document.querySelector('.services').classList.remove('hidden');
        }
    });
});

function showAuth() {
    hideAllSections();
    document.getElementById('auth').classList.remove('hidden');
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    document.getElementById('loginMessage').innerText = `Selamat datang, ${username}! Anda berhasil login.`;
    this.reset();
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('regName').value;
    document.getElementById('registerMessage').innerText = `Terima kasih, ${name}! Pendaftaran Anda berhasil.`;
    this.reset();
});
// Fungsi untuk mengirimkan pesan
function sendMessage() {
    const userMessage = document.getElementById("userMessage").value;
    if (userMessage.trim() === "") return; // Jangan kirim pesan kosong
    
    // Menambahkan pesan pengguna ke chat
    addMessage(userMessage, "user");

    // Kosongkan input setelah pesan dikirim
    document.getElementById("userMessage").value = "";

    // Simulasikan respons dari dokter setelah 2 detik
    setTimeout(() => {
        const doctorResponse = "Dokter: Terima kasih telah menghubungi kami. Apa keluhan Anda?";
        addMessage(doctorResponse, "doctor");
    }, 2000);
}

// Fungsi untuk menambahkan pesan ke dalam area chat
function addMessage(message, sender) {
    const chatHistory = document.getElementById("chatHistory");

    // Membuat elemen baru untuk pesan
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === "user" ? "user-message" : "doctor-message");

    // Menambahkan pesan ke elemen
    messageElement.innerText = message;

    // Menambahkan elemen pesan ke area chat
    chatHistory.appendChild(messageElement);

    // Scroll ke bawah setiap kali pesan baru ditambahkan
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

// Fungsi untuk menampilkan chat container
function showConsultationChat() {
    hideAllSections(); // Sembunyikan semua bagian lain
    document.getElementById("consultation").classList.remove("hidden"); // Tampilkan chat
}
function hideAllSections() {
    document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
}

function showAIChat() {
    hideAllSections();
    document.getElementById('aiChat').classList.remove('hidden');
}

async function sendMessage() {
    // Ambil pesan dari input pengguna
    const userMessage = document.getElementById('userMessage').value;

    // Periksa jika input kosong
    if (!userMessage.trim()) {
        alert("Mohon masukkan pertanyaan sebelum mengirim.");
        return;
    }

    // Tambahkan pesan pengguna ke riwayat chat
    const chatHistory = document.getElementById('chatHistory');
    chatHistory.innerHTML += `<div class="user-message">Anda: ${userMessage}</div>`;

    // Kosongkan input setelah pesan dikirim
    document.getElementById('userMessage').value = '';

    try {
        // Kirim permintaan ke API OpenAI
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer YOUR_API_KEY` // Ganti dengan API key Anda
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        // Tambahkan respons AI ke riwayat chat
        chatHistory.innerHTML += `<div class="ai-message">Dito AI: ${aiMessage}</div>`;
        chatHistory.scrollTop = chatHistory.scrollHeight; // Gulir otomatis ke bawah
    } catch (error) {
        console.error("Error saat mengirim pesan ke OpenAI:", error);
        chatHistory.innerHTML += `<div class="error-message">DITO AI MASIH DALAM TAHAP DEVELOPMENT TUNGGU YA.</div>`;
    }
}
