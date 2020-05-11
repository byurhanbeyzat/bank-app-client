import gql from 'graphql-tag'

export const getAuth = gql`
  query {
    me {
      id
    }
  }
`

export const getJustUser = gql`
  query {
    me {
      id
      firstName
      lastName
      ssn
      email
      avatar
      address
    }
  }
`

export const getUser = gql`
  query {
    me {
      id
      firstName
      lastName
      ssn
      email
      avatar
      address
      createdAt
      accounts {
        id
        IBAN
        balance
        currency
        accountType
      }
    }
  }
`

export const getAccounts = gql`
  query {
    me {
      id
      accounts {
        id
        IBAN
        balance
        accountType
        currency
      }
    }
  }
`

export const getPayments = gql`
  query {
    me {
      id
      payments {
        id
        IBAN_sender
        IBAN_beneficiary
        currency
        reason
        value
        status
        createdAt
      }
    }
  }
`

export const getAccountPayments = gql`
  query getPayments($iban: String!) {
    payments(iban: $iban) {
      incomes {
        id
        value
        reason
        currency
        IBAN_sender
        IBAN_beneficiary
        createdAt
      }
      expenses {
        id
        value
        reason
        currency
        IBAN_sender
        IBAN_beneficiary
        createdAt
      }
    }
  }
`

export const loginMutation = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      ssn
      email
      avatar
      address
    }
  }
`

export const logoutMutation = gql`
  mutation {
    logOut
  }
`

export const registerMutation = gql`
  mutation registerMutation(
    $firstName: String!
    $lastName: String!
    $ssn: String!
    $email: String!
    $password: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      ssn: $ssn
      email: $email
      password: $password
    ) {
      id
      firstName
      lastName
      ssn
      email
      avatar
      address
    }
  }
`

export const createAccountMutation = gql`
  mutation createAccount($owner: ID!, $currency: String, $accountType: String) {
    createAccount(
      owner: $owner
      currency: $currency
      accountType: $accountType
    ) {
      id
      IBAN
      balance
      status
    }
  }
`

export const makePaymentMutation = gql`
  mutation makePayment(
    $IBAN_sender: String!
    $IBAN_beneficiary: String!
    $reason: String
    $value: Float!
  ) {
    makePayment(
      IBAN_sender: $IBAN_sender
      IBAN_beneficiary: $IBAN_beneficiary
      reason: $reason
      value: $value
    ) {
      code
      status
      message
    }
  }
`

export const updateUserMutation = gql`
  mutation updateUser(
    $id: ID!
    $firstName: String
    $lastName: String
    $ssn: String
    $email: String
    $address: String
    $phoneNumber: String
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      ssn: $ssn
      email: $email
      address: $address
      phoneNumber: $phoneNumber
    ) {
      message
    }
  }
`
