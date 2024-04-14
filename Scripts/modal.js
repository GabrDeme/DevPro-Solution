//function openModal() {
//    const modal = document.getElementById('modal');
//    modal.classList.add('view');
//    console.log(modal);
//
//    modal.addEventListener('click', (e) => {
//        if (e.target.id === 'btn' || !modal.contains(e.target)) {
//            modal.classList.remove('view');
//        }
//    });
//}


///////////////////////////////////////////////////////////////////////////
const modal = document.getElementById('modal'); 
function openModal() {
    modal.classList.add('view');

    modal.addEventListener('click', (e) => {
        if (e.target.id === 'body' || !modal.contains(e.target)) {
            modal.classList.add('closeModal'); // Adiciona a classe 'closeModal' ao fechar o modal
            setTimeout(function() {
                modal.classList.remove('view');
           }, 500);
        }
    });

    // Remova a classe 'closeModal' quando a animação de fechamento for concluída
    modal.addEventListener('animationend', () => {
        modal.classList.remove('closeModal');
    });
}

