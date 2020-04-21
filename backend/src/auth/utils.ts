import { decode } from 'jsonwebtoken'

import { JwtPayload } from './JwtPayload'

/**
 * Parse a JWT token and return a user id
 * @param jwtToken JWT token to parse
 * @returns a user id from the JWT token
 */
export function parseUserId(jwtToken: string): string {
  const decodedJwt = decode(jwtToken) as JwtPayload
  return decodedJwt.sub
}

export function certToPEM(cert: string): string {
  cert = cert.match(/.{1,64}/g).join('\n');
  cert = `-----BEGIN CERTIFICATE-----
  MIIDBzCCAe+gAwIBAgIJfPhEQb0tROesMA0GCSqGSIb3DQEBCwUAMCExHzAdBgNV
  BAMTFmRldi04aGQ3eGVmay5hdXRoMC5jb20wHhcNMjAwNDE5MjExMTI2WhcNMzMx
  MjI3MjExMTI2WjAhMR8wHQYDVQQDExZkZXYtOGhkN3hlZmsuYXV0aDAuY29tMIIB
  IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtncMvesx5qLOgIA+1evxwfg9
  HcbZI4teKEhUDGtoKhZR+UyMBcJZEDffka9STTuKx0BVcmZbRg4KehKjEROH3HKw
  4ZW+ibn1kbcnUniOgJbOSiKieFI864yv9zxYF9MfUIrfRooDGLfHfmFRsqnYFaPl
  WxPeG2yOKjxmKNR3HMRCDUPMMit4gq3uOcpEIpcp5kMIGGD/U8zJPMXcGL6O3PeX
  CDsmRyiye00ZzEIet3ab6ZYdz9gEekKNKAbxi2rRBg0NeCTyqCkjzGr1/wjyaX3j
  FJV/xe+0u2kzLviejRoyyoyPShnvxEknEpvyRU+P4xmZuQsJxtI2nI/oKXW/owID
  AQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTgJGLqsQS+8NNWybFJ
  RpU3o4dVcTAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBABSa0DSp
  9OsJGYidBq1hTHO6UnmaFjoTqxaIquhqqmf+3pRVi1KsAl3qBbhtpSBAg3xNGaD1
  /2RXjj3C4AoSM5Kc5qf64BscWphwKLZSOlnaUvmn4wlltbEmFf8LD4rsllQVX2WQ
  O/cMcB5WuHQHED3zW+/tGSxr016AiCFlK6c6/HuYBrbC5XYYZakYju745Ui68TR9
  noY2s2QbwbRuZ7TwrqjfzepdTYho7LD/BhxAtFPozBnET/CF7s3xcpFWztGLJrtf
  RFlcpdeodEZ6ZUQRxSxdq7ipukVVLXg00z9yRLYauUEohHe7N8tioi70rEobnawx
  F49id1WGXBzLC6Y=
  -----END CERTIFICATE-----`;
  return cert;
}