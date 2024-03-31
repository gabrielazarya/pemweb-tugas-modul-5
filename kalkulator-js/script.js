// Fungsi Untuk Mouse Input

//insert angkanya
function insert(num) {
  document.form.textarea.value = document.form.textarea.value + num;
}

//hitung
function hasil() {
  var hasils = document.form.textarea.value;
  document.form.textarea.value = eval(hasils);
}

//clean
function clean() {
  document.form.textarea.value = '';
}

//hapus
function hapus() {
  var hasils = document.form.textarea.value;
  document.form.textarea.value = hasils.substring(0, hasils.length - 1);
}
