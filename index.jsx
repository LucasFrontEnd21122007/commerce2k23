import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/produtos">
                    {/* Componente de lista de produtos */}
                </Route>
                <Route path="/carrinho">
                    {/* Componente de carrinho de compras */}
                </Route>
                {/* Adicione mais rotas conforme necessário */}
            </Switch>
        </Router>
    );
}