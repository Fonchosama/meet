module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript and JSX files using Babel
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Path to the setup file

  // Habilita cobertura de código
  collectCoverage: true, // Activa la recolección de cobertura
  collectCoverageFrom: [
    'src/**/*.{js,jsx}', // Especifica los archivos a incluir
    '!src/**/*.test.{js,jsx}', // Excluye archivos de prueba
    '!src/**/index.{js,jsx}', // Opcional: excluye archivos de punto de entrada
  ],
  coverageDirectory: '<rootDir>/coverage', // Directorio donde guardar los informes
  coverageReporters: ['text', 'lcov'], // Define los formatos del informe
};
