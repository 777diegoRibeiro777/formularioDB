function formatarCpf(campo) {
  // Remove caracteres não numéricos
  var valor = campo.value.replace(/\D/g, '');

  // Adiciona a máscara
  valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  // Atualiza o valor no campo
  campo.value = valor;
}