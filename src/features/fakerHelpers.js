import { faker } from '@faker-js/faker'

export function generateRandomName() {
  const sex = faker.name.sexType()
  return `${faker.name.lastName(sex)} ${faker.name.firstName(sex)[0]}. ${faker.name.middleName(sex)[0]}.`
}

export function getRandomAddress() {
  return `${faker.address.zipCode()}, ${faker.address.state()}, город ${faker.address.city()}, ${faker.address.streetAddress()}`
}

export function getFullName() {
  const sex = faker.name.sexType()
  return `${faker.name.lastName(sex)} ${faker.name.firstName(sex)} ${faker.name.middleName(sex)}`
}
