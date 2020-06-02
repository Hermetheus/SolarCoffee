INSERT INTO "ProductInventories"
  ("CreatedOn", "UpdatedOn", "QuantityOnHand", "IdealQuantity", "ProductId")
VALUES(NOW(), NOW(), 20, 24, 1)


DELETE * FROM "ProductInventories" WHERE "Id" = 1