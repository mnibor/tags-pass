import { AppDataSource, UserModel, ProfileModel } from '../config/data-source';

const preloadUsers = [
  {
    username: 'mgomez',
    email: 'mgomez@correo.com',
    password: 'password123',
    status: true,
    profile: {
      name: 'Mario Gomez',
      location: 'Colombia',
      biography: 'Estudiante de la Universidad de Antioquia',
    },
    created_at: '2022-01-01T00:00:00.000Z',
    updated_at: '2022-01-01T00:00:00.000Z',
  },
];

export const preloadDataUsers = async () => {
  const entityManager = AppDataSource.createEntityManager();
  await entityManager.transaction(async (transactionalEntityManager) => {
    const users = await UserModel.find();
    if (users.length)
      return console.log('Ya hay datos de usuarios en la base de datos');

    for await (const user of preloadUsers) {
      // Create a new Profile instance
      const newProfile = ProfileModel.create(user.profile);

      // Save the Profile first
      await transactionalEntityManager.save(newProfile);

      // Create the User and associate the Profile
      const newUser = UserModel.create({
        ...user,
        profile: newProfile, // Assign the saved Profile instance
      });

      await transactionalEntityManager.save(newUser);
    }
    console.log('Precarga de los datos de usuarios se realizó correctamente');
  });
};
