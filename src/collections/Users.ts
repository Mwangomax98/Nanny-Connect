import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: {
    // Lock the account for 15 minutes after 5 wrong passwords.
    maxLoginAttempts: 5,
    lockTime: 15 * 60 * 1000,
    tokenExpiration: 8 * 60 * 60,
    cookies: {
      sameSite: 'Strict',
      secure: process.env.NODE_ENV === 'production',
    },
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
    },
  ],
}
