import { Request, Response } from "express";

export function home(req: Request, resp: Response): void {
    resp.send(
        `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width">
                <title>Dev Helper - Daniel Mendes</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            </head>
            <body>
                <div class="container-fluid">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="card-title">API para testes de REST</h1>
                            <p class="card-subtitle lead">Opções</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">URL</td>
                                        <th scope="col">Métodos</td>
                                        <th scope="col">Conteúdo</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>/code/v1/rand</td>
                                        <td>Todos</td>
                                        <td>Retorna um código HTTP aleatório</td>
                                    </tr>
                                    <tr>
                                        <td>/code/v1/:id</td>
                                        <td>Todos</td>
                                        <td>Retorna o mesmo código HTTP enviado</td>
                                    </tr>
                                    <tr>
                                        <td>/json/v1/</td>
                                        <td>POST</td>
                                        <td>Persiste o JSON enviado</td>
                                    </tr>
                                    <tr>
                                        <td>/json/v1/:id</td>
                                        <td>PUT</td>
                                        <td>Atualiza o JSON já persistido</td>
                                    </tr>
                                    <tr>
                                        <td>/json/v1/:id</td>
                                        <td>GET</td>
                                        <td>Retorna o JSON já persistido</td>
                                    </tr>
                                    <tr>
                                        <td>/json/v1/:id</td>
                                        <td>DELETE</td>
                                        <td>Apaga o JSON já persistido</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </body>
        </html>
        `
    );
}