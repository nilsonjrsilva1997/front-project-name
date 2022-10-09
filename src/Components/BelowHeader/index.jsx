import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import './index.css';

function BelowHeader() {
    return(
        <div class="container">
            <div>
                <FaMotorcycle />

                <div>DELIVERY</div>
            </div>

            <div>
                <div>
                    Entregar agora, em até 1 h • até R$ 12,00
                </div>

                <div>Selecionar endereço</div>
            </div>

            <div>
                <div>
                    A cada 10 pedidos, ganhe R$ 50,00 de desconto na próxima compra
                </div>
            </div>
        </div>
    )
}

export default BelowHeader;