const jwt = require("jsonwebtoken")
jwt.sign({sub: "Jane"}, "JWT-SECRET")
jwt.sign({sub: "Jane", message: "hello world"}, "JWT-SECRET")
jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKYW5lIiwibWVzc2FnZSI6ImhlbGxvIHdvcmxkIiwiaWF0IjoxNjQ5MzIxMTA3fQ.N05MV06djbQ4WiQ_iyXED8fotVfS7RKbAA4NTxFgnUQ", "JWT-SECRET")
jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKYW5lIiwibWVzc2FnZSI6ImhlbGxvIHdvcmxkIiwiaWF0IjoxNjQ5MzIxMTA3fQ.N05MV06djbQ4WiQ_iyXED8fotVfS7RKbAA4NTxFgnUQ", "JWT-SECRET")
jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKYW5lIiwibWVzc2FnZSI6ImhlbGxvIHdvcmxkIiwiaWF0IjoxNjQ5MzIxMTA3fQ.N05MV06djbQ4WiQ_iyXED8fotVfS7RKbAA4NTxFgnUQ"))
jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKYW5lIiwibWVzc2FnZSI6ImhlbGxvIHdvcmxkIiwiaWF0IjoxNjQ5MzIxMTA3fQ.N05MV06djbQ4WiQ_iyXED8fotVfS7RKbAA4NTxFgnUQ")