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
      localStorage.setItem("password", "");
      passRight = false;
    }
  }
  
  let _t = "";
  while(!passRight) {
    if(!!localStorage.getItem("password")) {
      await tryPassword(localStorage.getItem("password"));
      if(passRight) break;
      localStorage.setItem("password", "");
    }
    passwd = prompt(_t + "Şifreyi Girin:");
    await tryPassword(passwd);
    _t = "Yanlış şifre!\n\n";
  };
  
  main()
}

run()





function main() {
  $(".teacher-select").select2({
    data: Data.teachers.filter(t => t.id != 0).map(t => {
      return {
        id: t.id,
        text: `${t.name} (${t.subject})`
      };
    }),
    width: 'resolve',
    placeholder: "...",
  });
  
  $(".class-select").select2({
    data: Data.classes.map(c => {
      let id = c.name || (c.grade + "-" + c.letter);
      return {
        id,
        text: id,
      };
    }),
    width: 'resolve',
    placeholder: "...",
  });
}

async function pbutton(t) {
  if(t == "t") {
    // teacher
    
    let teacher = $('#teacher-select').select2('data')[];
  } else {
    // class
    
    let class = $('#class-select').select2('data')[0];
  }
}