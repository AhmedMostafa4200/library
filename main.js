var booksArr = [];
var bookIndex = 0;

class Author {
    constructor(authorName, authorMail){
        this.authorName = authorName;
        this.authorMail = authorMail
    }
}
class Book{
    constructor(name, price, date, author){
        this.name = name;
        this.price = price;
        this.date = date;
        this.Author = author;
    }
}



document.querySelector('.booksForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.querySelector('.booksForm').style.display = 'none';
    document.querySelector('.inputsForm').style.display = 'block';
    document.querySelector('.inputsFormLabel').textContent = `Book ${bookIndex+1} of ${Number(document.querySelector('#booksNumber').value)}`
})

document.querySelector('.inputsForm').addEventListener('submit', function(e){
    e.preventDefault();
    
    var authorOfTheBook = new Author(document.querySelector('.authorName').value, document.querySelector('.authorMail').value); 
    booksArr[bookIndex] = new Book(document.querySelector('.bookName').value, document.querySelector('.bookPrice').value, document.querySelector('.bookDate').value, authorOfTheBook);
    bookIndex++; 

    document.querySelector('.inputsFormLabel').textContent = `Book ${bookIndex+1} of ${Number(document.querySelector('#booksNumber').value)}`

    document.querySelector('.inputsForm').reset();

    if(bookIndex == Number(document.querySelector('#booksNumber').value)){
        
        for (let index = 0; index < Number(document.querySelector('#booksNumber').value); index++) {
            document.querySelector('.booksContainer').innerHTML += `<form onsubmit="saveModification(event)" id="${index}" class="fff row col-md-12 text-center mt-2">
            <div class="row col-md-4">
            <input type="text" disabled required autofocus class="authorName modifiable contentAlignCenter mt-2 col-md-6" value="${booksArr[index].Author.authorName}">
            <input type="email" disabled required class="authorMail modifiable contentAlignCenter mt-2 col-md-6" value="${booksArr[index].Author.authorMail}">
            </div>
            <input type="text" disabled required class="bookName modifiable contentAlignCenter mt-2 col-md-2" value="${booksArr[index].name}">
            <input type="number" min="5" disabled required class="bookPrice modifiable contentAlignCenter mt-2 col-md-2" value="${booksArr[index].price}">
            <input type="date" disabled required class="bookDate modifiable contentAlignCenter mt-2 col-md-2" value="${booksArr[index].date}">
            <button type="button" class="editBtn editdelete btn btn-success col-md-1" onclick="editRow(event)">Edit</button>
            <button type="button" class="deletetBtn editdelete btn btn-danger col-md-1" onclick="deleteRow(event)">Delete</button>

            <button type="submit" id="saveBtn${index}" class="savetBtn savecancel btn btn-success col-md-1">Save</button>
            <button type="button" class="cancelBtn savecancel btn btn-danger col-md-1" onclick="cancelModification(event)">Cancel</button>

            </form>`;
            // document.querySelector('.booksContainer').innerHTML += `<fieldset disabled="true" class="row col-md-12 text-center mt-2">
            // <div class="row col-md-12">
            // <input class="authorName contentAlignCenter mt-2 col-md-2" value="${booksArr[index].Author.authorName}">
            // <input class="authorMail contentAlignCenter mt-2 col-md-2" value="${booksArr[index].Author.authorMail}">
            // <input class="bookName contentAlignCenter mt-2 col-md-2" value="${booksArr[index].name}">
            // <input class="bookPrice contentAlignCenter mt-2 col-md-2" value="${booksArr[index].price}">
            // <input class="bookDate contentAlignCenter mt-2 col-md-2" value="${booksArr[index].date}">
            // <button class="editBtn btn btn-success col-md-1" onclick="ssdd()">Edit</button>
            // <button class="deletetBtn btn btn-danger col-md-1" onclick="deleteOnClick()">Delete</button>
            // </div>
            // </fieldset>`;          
        }

        document.querySelector('.inputsForm').style.display = 'none';
        document.querySelector('.booksContainer').style.display = 'block';
        
    }
    
})





// Edit BTN
function editRow(event){

    let t = $(event.target).parent().attr('id');
    console.log(t);/////////////
    console.log($(event.target).parent());////////////
    // $(`#${t}`).find('.authorName').attr('disabled', 'true');
    $(`#${t}`).find('.editdelete').hide();
    $(`#${t}`).find('.savecancel').show();
    $(`#${t}`+' .modifiable').removeAttr('disabled');
}



//Save BTN
function saveModification(event){
    event.preventDefault();
    // var n = $(event.target).parent().attr('id');
    var n = event.target.id;
    console.log(n);
    console.log(`saveBtn${n}`);
    console.log(document.activeElement.id);
    
    
    if(document.activeElement.id == `saveBtn${n}`){
        console.log(5555555555);
        
        

        
    
        booksArr[n].Author.authorName =  $(`#${n}`+' .authorName').val();
        booksArr[n].Author.authorMail =  $(`#${n}`+' .authorMail').val();
        booksArr[n].name =  $(`#${n}`+' .bookName').val();
        booksArr[n].price =  $(`#${n}`+' .bookPrice').val();
        booksArr[n].date =  $(`#${n}`+' .bookDate').val();
    
        $(`#${n}`+' .modifiable').attr('disabled', 'true');
    
        $(`#${n}`).find('.editdelete').show();
        $(`#${n}`).find('.savecancel').hide();
    }

}



// Cancel BTN
function cancelModification(event){

    var m = $(event.target).parent().attr('id');

    $(`#${m}`+' .authorName').val(booksArr[m].Author.authorName);
    $(`#${m}`+' .authorMail').val(booksArr[m].Author.authorMail);
    $(`#${m}`+' .bookName').val(booksArr[m].name);
    $(`#${m}`+' .bookPrice').val(booksArr[m].price);
    $(`#${m}`+' .date').val(booksArr[m].date);

    $(`#${m}`+' .modifiable').attr('disabled', 'true');

    $(`#${m}`).find('.editdelete').show();
    $(`#${m}`).find('.savecancel').hide();

}



// Delete BTN
function deleteRow(event){
    let t = $(event.target).parent().attr('id');
    booksArr.splice(t,1);
    $(`#${t}`).hide();
}













