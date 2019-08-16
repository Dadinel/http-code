# http-code-body-tester

NodeJS/Heroku - API que retorna um código HTTP para teste, também sendo possível enviar e receber um body no endpoint

---

|URL|Métodos|Conteúdo|
|-|-|-|
|/code/v1/rand|Todos|Todos	Retorna um código HTTP aleatório|
|/code/v1/:id|Todos|Retorna o mesmo código HTTP enviado|
|/json/v1/|POST|Persiste o JSON enviado|
|/json/v1/:id|PUT|Atualiza o JSON já persistido|
|/json/v1/:id|GET|Retorna o JSON já persistido|
|/json/v1/:id|DELETE|Apaga o JSON já persistido|

> Site: [http://status-http.herokuapp.com/](http://status-http.herokuapp.com/)
