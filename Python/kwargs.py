def a(req):
    print(req)

def b(req, req2):
    print(req, req2)

def res(obj, **kw):
    obj(**kw)

def res_obj(obj, req):
    obj(req)

def res_org(order, req, req2):
    if order == "a":
        a(req)
    elif order == "b":
        b(req, req2)

def main():
    res_org("a", "req", "req2")
    res_org("b", "req", "req2")

    res_obj(a, "req")

    res(a, req="req")
    res(b, req="req", req2="req2")

main()
