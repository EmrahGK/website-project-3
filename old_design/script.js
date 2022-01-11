/*console.log("Script is running");

let Data = { classes: [], teachers: [] };

let passwd;
let passRight = false;

async function run() {
  
  function inIframe () {
      try {
          return window.self !== window.top;
      } catch (e) {
          return true;
      }
  }
  
  if(inIframe()) {
    document.write("IFrame Error");
    return;
  }
  
  let tryPassword = async (p) => {
    try {
      let r = await fetch(`/api/data/${p}`);
      if(!r.ok) throw new Error("wrong password");
      Data = await r.json();
      localStorage.setItem("password", p);
      passRight = true;
      console.log("Password right: " + p);
    } catch {
      localStorage.setItem("password", "");
      passRight = false;
      console.log("Wrong Password");
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





const Subjects = {};





const getTeacher = (id) => Data.teachers.filter(t => t.id == id)[0] || getTeacher(0);
const getPeriods = (id) => Data.classes.filter(t => t.id == id)[0].periods;
const formatTeacher = (d) => d.name + "\n" + (d.subject != "null" ? d.subject.toUpperCase() : "");



function pbutton(t) {
  if(t == "t") {
    // teacher
    
    let teacher = $('#teacher-select').select2('data')[0]; // id, name, subject
    
    
  } else {
    // class
    
    document.getElementById("forms").style.display = "none";
    
    let c = $('#class-select').select2('data')[0]; // id, periods, grade, letter
    
    getPeriods(c.id).forEach((id, index) => {
      let i = index + 1;
      
      document.getElementById(`d${i}`).innerText = formatTeacher(getTeacher(id));
    })
    
    document.getElementById("program-div").style.display = "block";
  }
}

function hidebtn(){
  document.getElementById("program-div").style.display = "none";
  document.getElementById("forms").style.display = "block";
}*/