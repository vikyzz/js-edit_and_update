let names = document.getElementById("name")
let emails = document.getElementById("email")
const action = document.getElementById("cu-action")
let table = document.getElementById("todo-body")
let ids = 0
let currentids = null
let array=[]



action.addEventListener("click",addtable)


function key(curid,val)
{
    currentids = curid
    action.innerHTML=val
    
}


function addtable(){
    if(currentids)
    {
        console.log("found")
        const list = array.find(t => t.id === currentids)

    array = array.map((elements)=>
    {
        if(elements.id === list.id)
        {
          list.name = names.value
          list.email = emails.value
        }

        return elements;
    })  
    

        key(null,"Add");
        
        
    }
    else{
        let obj={}

        obj.id = ++ids
        obj.name = names.value
        obj.email = emails.value

        array.push(obj)
            
        
    }

    display();

}

function display(){
    let trow = ""
        array.forEach(elements=>{
            let newrow = `<tr><td>${elements.id}</td>
            <td>${elements.name}</td><td>${elements.email}</td>
            <td><button onclick="update(${elements.id})">Edit</button>
            <button onclick="deletes(${elements.id})">Delete</button></td></tr>`

            trow+=newrow
        })
        table.innerHTML = trow


        reset();
}

function reset()
{
    names.value = ""
    emails.value = ""
}

function update(ids){
    

   let x =array.find(t => t.id === ids)
            if(x){
                document.getElementById("name").value = x.name
                document.getElementById("email").value = x.email
            }
        
    
    key(ids,"update")

}

function deletes(ids)
{
    array=array.filter((elements)=>{
        if(!(elements.id === ids)){
            return elements
        }
    })


    let trows = ''

    
    array.forEach(element =>{
    let newrow =`<tr>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td><button onclick="update(${element.id})">EDIT</button>
                <button onclick="deletes(${element.id})">DELETE</button></td></tr>`
                trows+=newrow
    });

   
    
    document.getElementById("todo-body").innerHTML = trows   
}





