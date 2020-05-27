SELECT * FROM "Customers" c
INNER JOIN "CustomerAddresses" ca
ON c."PrimaryAddressId" = ca."Id";

