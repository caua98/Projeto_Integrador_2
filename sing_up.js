const supabaseUrl = 'https://baflbcaumtbvhzvvehig.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZmxiY2F1bXRidmh6dnZlaGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTU2NDQsImV4cCI6MjA3MTY5MTY0NH0.9WIuux-7jhH3_DsDEIkHNynRnzV5OAT2wDa29qrz4p8';

// Inicialize o cliente Supabase usando o objeto global
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('singUpForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        alert('Erro: ' + error.message);
        document.getElementById('singUpForm').reset();
    } else {
        alert('Cadastro realizado! Verifique seu e-mail.');
        window.location.href = 'index.html';
    }
});