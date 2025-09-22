document.getElementById("LoginForm").addEventListener("submit", function(e)
{
  e.preventDefault();
  
  const loginEmail = document.getElementById(";loginEmail").value.trim():
  const loginPassword = document.getElementById("loginPassword").value;
  
  const storedRaw = localStorage.getItem(loginEmail);
  const storedUser = storedRaw ? JSON.parse(storedRaw) : null;
  
  if (storedUser && storedUser.password == loginPassword) {
    localStorage.setItem("curentUser", loginEmail);
    alert("Login Berhasil. Halo" + storedUser.nama + "!");
  }else{
    alert("Login gagal email salah atau password salah cuy")
  }
});