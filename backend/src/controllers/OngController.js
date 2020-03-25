import { randomBytes } from 'crypto';
import connection from '../database/connection';

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json();
  }

  // async delete(request, response) {
  //   const { id } = request.params;
  //   const ong_id = request.headers.authorization;

  //   if (id !== ong_id) {
  //     return response.status(401).json({ error: 'operation not permited' });
  //   }

  //   await connection('ongs')
  //     .where('id', id)
  //     .delete();

  //   return response.status(204).send();
  // }
};
