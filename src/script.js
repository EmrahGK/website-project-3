console.log("Script is running");

let Data = { classes: [], teachers: [] };

let passwd;
let passRight = false;

async function run() {
  
  let tryPassword = async (p) => {
    try {
      let r = await fetch(`/data/${p}`);
      if(!r.ok) throw new Error("wrong password");
      Data = await r.json();
      localStorage.setItem("password", p);
      passRight = true;
    } catch {
      localStorage.setItem("password", null);
      passRight = false;
    }
  }
  
  let _t = "";
  while(!passRight) {
    if(localStorage.getItem("password") !== null) {
      await tryPassword(localStorage.getItem("password"));
      if(passRight) break;
      localStorage.setItem("password", null);
    }
    passwd = prompt(_t + "Şifreyi Girin:");
    await tryPassword(passwd);
    _t = "Yanlış şifre!\n\n";
  };
  
  alert("Şifre doğru");
}

run()