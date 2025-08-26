const supabaseUrl = 'https://baflbcaumtbvhzvvehig.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZmxiY2F1bXRidmh6dnZlaGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxMTU2NDQsImV4cCI6MjA3MTY5MTY0NH0.9WIuux-7jhH3_DsDEIkHNynRnzV5OAT2wDa29qrz4p8';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        alert('Erro: ' + error.message);
        document.getElementById('loginForm').reset();
    } else {
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
    }   
})