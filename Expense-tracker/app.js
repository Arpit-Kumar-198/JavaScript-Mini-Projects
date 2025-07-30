const addButton = document.querySelector('.expense-btn');
        const deleteButtons = document.querySelectorAll('.delete-btn');
        const title = document.querySelector('#title');
        const amount = document.querySelector('#amount');
        const date = document.querySelector('#date');
        const contentBox = document.querySelector('.content-box');

        const totalExpense = document.querySelector(".total-expense");
        show();
        function show(){

            contentBox.innerHTML = localStorage.getItem("Expenses");
            totalExpense.innerText = localStorage.getItem("TotalExpense") || 0;
        
        }
        function storage(){
            localStorage.setItem("Expenses",contentBox.innerHTML);
            localStorage.setItem("TotalExpense",totalExpense.innerText) || 0;
        }
        function updateTotalExpense(amount){
           let currentTotal = parseFloat(localStorage.getItem("TotalExpense")) || 0;
            let newTotal = currentTotal + parseFloat(amount);
            totalExpense.innerText = newTotal;
            localStorage.setItem("TotalExpense", newTotal);
        }
        addButton.addEventListener('click', () => {
        // Trim values to remove spaces
        const titleVal = title.value.trim();
        const amountVal = amount.value.trim();
        const dateVal = date.value.trim();

        // Validate all fields
        if (!titleVal || !amountVal || !dateVal || parseFloat(amountVal) <= 0) {
            alert("Please fill all fields correctly before adding.");
            return;
        }

        let expenseInfo = document.createElement("div");
        expenseInfo.className = "expense-info";
        let titleBox = document.createElement("div");
        let ammountBox = document.createElement("div");
        let dateBox = document.createElement("div");
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger delete-btn";
        deleteBtn.innerText = "Delete";

        titleBox.innerText = titleVal;
        ammountBox.innerText = amountVal + " ₹";
        dateBox.innerText = dateVal;
        expenseInfo.appendChild(titleBox);
        expenseInfo.appendChild(ammountBox);
        expenseInfo.appendChild(dateBox);
        expenseInfo.appendChild(deleteBtn);

        contentBox.appendChild(expenseInfo);
        let tempAmmount = amountVal;

        // Clear inputs
        title.value = "";
        amount.value = "";
        date.value = "";

        storage();
        updateTotalExpense(tempAmmount);
    });



    contentBox.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
        const expenseItem = e.target.parentElement;
        const amountText = expenseItem.children[1].innerText; // e.g., "100 ₹"
        const amountValue = parseFloat(amountText.split(' ')[0]);

        // Subtract from total
        let currentTotal = parseFloat(localStorage.getItem("TotalExpense")) || 0;
        let newTotal = currentTotal - amountValue;
        totalExpense.innerText = newTotal;
        localStorage.setItem("TotalExpense", newTotal);
        expenseItem.remove();
        storage(); // update localStorage with the new DOM
    }

    });
