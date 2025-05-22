        let todolist = JSON.parse(localStorage.getItem('mylist')) || [];
        display();
        function addTodo(){
            let inputElement = document.querySelector('#todo-input');
            let todoitem = inputElement.value;

            let dateElement = document.querySelector('#todo-date');
            let dateitem = dateElement.value;

            todolist.push({item:todoitem, dueDate:dateitem});
            localStorage.setItem('mylist',JSON.stringify(todolist));
            inputElement.value = '';
            dateElement.value = '';
            display();
        }
        function display(){
            let displayitem = document.querySelector('.todo-container');

            let newHTML = '';
            
            for (let i = 0; i < todolist.length; i++) {
                // let todoItem = todolist[i].item;
                // let date = todolist[i].dueDate;
                let {item,dueDate} = todolist[i];
                newHTML += `
              
                    <span>${item}</span>
                     <span>${dueDate}</span>
                    <button onclick="todolist.splice(${i},1);
                    localStorage.setItem('mylist',JSON.stringify(todolist));
                    display();">Delete</button>
                `;
                
            }
            displayitem.innerHTML = newHTML;
           
        }