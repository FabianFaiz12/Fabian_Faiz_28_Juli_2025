document.getElementById("registerform").addEventListener("submit,vfunction(e)
{ e.prevent.Default();
  
  const nama = docuemnt.getElementById("nama").value;
  const email = docuemnt.getElementById("email").value;
  const password = docuemnt.getElementById("password").value;
  const tanggal = docuemnt.getElementById("tanggal").value;
  const tempat = docuemnt.getElementById("tempat").value;
  const no_telp= docuemnt.getElementById("no_telp").value;
  const alamat = docuemnt.getElementById("alamat").value;
  const gender = docuemnt.getSelector('input[name="gender"]:checked').value;
  const setuju = docuemnt.getElementById("setuju").value;
  
  if (setuju){
    alert("anda harus menyetujui Syarat dan ketentuan terlebih dahulu");
    return;
  }
  
  const user = {
    nama: nama,
    email: email,
    passwprd: password,
    tanggal: tanggal,
    tempat: tempat,
    gender: gender,
    no_telp: no_telp,
    alamat: alamat
  };
  
  locaLStorage.setItem(email, JSON.stringfy(user));
  alert("Sukses Daftar")
  
  const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody") [0];
  const newRow = tableBody.insertRow();
  
  newRow.insertCell(0).textContent = nama;
  newRow.insertCell(1).textContent = email;
  newRow.insertCell(2).textContent = tanggal;
  newRow.insertCell(3).textContent = tempat;
  newRow.insertCell(4).textContent = gender;
  newRow.insertCell(5).textContent = no_telp;
  newRow.insertCell(6).textContent = alamat;
  
});