console.log("project 2")

document.querySelector('#search').addEventListener("click", function (e) {
    note()
});
let clone = document.querySelector('.mynotes')

const savenotes = () => {
    const notes = document.querySelectorAll('.note');
    console.log(notes);
    const data = [];

    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    // console.log(data)
    localStorage.setItem("notes", JSON.stringify(data))
}


const note = (text = "") => {
    const addnote = document.createElement('div');
    addnote.className = 'main'
    addnote.innerHTML = `<div class="box">
    <textarea class="note"  placeholder="Take a note..">${text}</textarea>
    <div class="icon"><i class="save fa-sharp fa-solid fa-floppy-disk"></i><i class="btn fa-sharp fa-solid fa-trash"></i>
</div>
  </div>`

    addnote.querySelector('.btn').addEventListener('click', function () {
        addnote.remove();
        savenotes();
    })

    addnote.querySelector('.save').addEventListener(
        "click", function () {
            savenotes()
        }
    )
    clone.appendChild(addnote);
    savenotes();
};

(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        // console.log(lsnotes)
        lsnotes.forEach(
            (lsnotes) => {
                note(lsnotes)
            })
    }
)();