const myObject = 
{
    js : 'javascript',
    cpp: 'C++',
    rb: "rubu",
    swift: "swift by apple"
}

for (const key in myObject)
{
   // console.log(myObject[key]);
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["js", "cpp", "rb", "swift"]

for(const i in programing)
{
    console.log(programing[i])
}