SELECT c."FirstName", c."LastName", ca."City",
ca."State" FROM "Customers" c
INNER JOIN "CustomerAddresses" ca
ON c."PrimaryAddressId" = ca."Id";