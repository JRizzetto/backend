import postgres from 'postgres';
import dotenv from 'dotenv';
dotenv.config();

export const sql = postgres(process.env.DATABASE_URL, {
  ssl: 'require', // já cuida do certificado
});


(async () => {
  try {
    await sql`SELECT 1`; // comando simples para testar se o banco responde
    console.log('✅ Conectado com sucesso ao banco de dados Neon!');
  } catch (error) {
    console.error('❌ Erro ao conectar ao banco de dados Neon:');
    console.error(error);
    process.exit(1); // encerra o servidor se não conectar
  }
})();