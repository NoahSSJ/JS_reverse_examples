from Crypto.Signature import pkcs1_15
from Crypto.Hash import SHA256
from Crypto.PublicKey import RSA
import base64


content = "5a7cd604e16eb740376f7e761641430ea9fea1c25080625b31cfb0a5e45dce44360ec2ffc5148f19c8891d1cd5c76199118726899733ea543de9745062ca4432cb0ffa090fc69504b49dae7ebeaaf06acab73756bb1d1f35206fed509f04c9b5fc65d848c1b0b9362281b012a84bb444"

private_key = """-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAJv5eUii96mhxdkBgUwYqALCVulvG5K03CDE64aXCxIikcnHkXuqFTR8hXoN70P0maEa8FgzezfOyFoM8PCVnRr6UoLE1ttgzQTVHeiIneIjwB84PYlhXSe2o4Eeaxcr8kfWn1P2HgYy9i1lH2hPKM+fa+gEk2Y5AOS++iGs9Ag5AgMBAAECgYAQ4iJEwI86Z255HPaX/BtDoTGzNvmvGbCyQ16TRQpHvkI1q0qOLkz5T3lLSvLZUkLG85mMkpYF5nY9eSUjha5pr5scSka4g/31qSr01GltGoiJa0v2KXR9+OiiWDTtVmHwuI0sT0h6PpwHwJtOQSpq4lt91bB4c0QrABMcEv2I4QJBAODdLmLZ1+FvRAXxVRy2vcMu9vbnQkRfe/Fjy3SBBtFoWIIEKAFQB43fYgsW6OIP3eDBfIHEKQMtnccQR97TEu0CQQCxkljhMav/UB/3NU8YiHe9QECVcRLhbIzm3CMMdSize5rMISrI94L432yQju0c9d25hx6/bKUT4aFSMuKbVST9AkBPcnY4IMWgdcJv4xNyQLKNKqPBGnYUWDQfVmYE9K1nAVn8HeHQjOkOXDV0u5RugrKe/V2zL45Z/Bz5vyvVc3gFAkAtpN6v1CLQF/p/gvZ36exNe0yenVgrFcoKNZ/UvfDeYfFic0waKHVEH7o6VmLgxNpfrDndHsI4IBFlnareHr7JAkEAow04pkBiii4lPe1iJaj+6aYedpKszic01RiKjPA9DJaU4Q4BDh0GMmGVtkQfzja766KVV4np6aHTSF9js7HJzw==
-----END PRIVATE KEY-----"""


def shift_char(c, key):
    code = ord(c)

    if code < 32 or code > 126:
        return c

    key = key % 95
    if key < 0:
        key += 95

    code += key

    if code > 126:
        code -= 95

    if code < 32:
        code += 95

    return chr(code)


def calc_key(a, index):
    return (a + index * 7) % 50


def mix(sign, step, a):
    arr = list(sign)

    for i in range(step, len(arr) - step):
        index = i - step
        key = calc_key(a, index)
        arr[i] = shift_char(arr[i], key)

    return "".join(arr)


# -----------------------
# 1 RSA-SHA256签名
# -----------------------

key = RSA.import_key(private_key)

h = SHA256.new(content.encode())

signature = pkcs1_15.new(key).sign(h)

sign = base64.b64encode(signature).decode()

# -----------------------
# 2 二次混淆
# -----------------------

step = 4
a = 123456

final_sign = mix(sign, step, a)

print("base64_sign =", sign)
print("final_sign =", final_sign)

