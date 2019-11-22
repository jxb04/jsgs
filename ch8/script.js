let textArea=document.getElementById('text-area');
let okButton = document.getElementById('ok-button');

textArea.style.display = 'none';

okButton.addEventListener('click', function() {
//   textArea.innerText = 'Button clicked';
   textArea.style.display = 'block';
});

