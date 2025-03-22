document.getElementById('buy_software').onclick = showShop;
document.querySelector('.shop-controls .close').onclick = hideShop;
document.querySelector('.shop-controls .minimize').onclick = hideShop;

function showShop() {
    div = document.getElementById('shop');
    div.style.display = 'block';
}
function hideShop() {
    div = document.getElementById('shop');
    div.style.display = 'none';

}
function showShop() {
    div = document.getElementById('shop');
    div.style.display = 'block';
}


//funzioni per l'acquisto dei tool
document.getElementById("nmap").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Nmap è un software di scansione di rete. Vuoi acquistarlo?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/nmap')
            .then(response => response.json())
            .then(data => {
                if(data.status === 'success') {
                    const toolData = {
                        name: 'nmap',
                        description: 'Nmap è un software di scansione di rete.',
                    };
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'success') {
                                message_div.innerHTML = "Hai acquistato Nmap!";
                                button = document.createElement('button');
                                button.innerHTML = 'OK';
                                while (buttonContainer.firstChild) {
                                    buttonContainer.removeChild(buttonContainer.firstChild);
                                }
                                buttonContainer.appendChild(button);
                                button.onclick = function() {
                                    message_div.style.display = 'none';
                                    window.location.reload();
                                };
                                message_div.appendChild(buttonContainer);
                            } else {
                                alert("Non hai abbastanza soldi per acquistare Nmap!");
                                message_div.style.display = 'none';
                            }
                        });
                }else {
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });

    }
    button_no.onclick = function() {
        message_div.style.display = 'none';
    };
});
document.getElementById("spiderfoot").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "SpiderFoot è un software di intelligence gathering. Vuoi acquistarlo?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/spiderfoot')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'spiderfoot',
                        description: 'SpiderFoot è un software di intelligence gathering.',
                    }
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'success') {
                                message_div.innerHTML = "Hai acquistato Spidefoot!";
                                button = document.createElement('button');
                                button.innerHTML = 'OK';
                                while (buttonContainer.firstChild) {
                                    buttonContainer.removeChild(buttonContainer.firstChild);
                                }
                                buttonContainer.appendChild(button);
                                button.onclick = function() {
                                    message_div.style.display = 'none';
                                    window.location.reload();
                                };
                                message_div.appendChild(buttonContainer);
                            } else {
                                alert("Non hai abbastanza soldi per acquistare SpiderFoot!");
                                message_div.style.display = 'none';
                            }
                        });
                } else {
                    message_div.innerHTML = "Hai acquistato SpiderFoot in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("vuln_scan").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare lo script di Nmap per la scansione delle vulnerabilità?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/vuln_scan')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'vuln_scan',
                        description: 'Lo script, da usare come parametro di per la scansione delle vulnerabilità.',
                    }
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'success') {
                                message_div.innerHTML = "Hai acquistato lo script!";
                                button = document.createElement('button');
                                button.innerHTML = 'OK';
                                while (buttonContainer.firstChild) {
                                    buttonContainer.removeChild(buttonContainer.firstChild);
                                }
                                buttonContainer.appendChild(button);
                                button.onclick = function() {
                                    message_div.style.display = 'none';
                                    window.location.reload();
                                };
                                message_div.appendChild(buttonContainer);
                            } else {
                                alert("Non hai abbastanza soldi per acquistare il software di scansione vulnerabilità!");
                                message_div.style.display = 'none';
                            }
                        });
                } else {
                    message_div.innerHTML = "Hai acquistato il software di scansione vulnerabilità in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("exploitDB").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di ExploitDB?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {

        fetch('/check_tool/searchsploit')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'searchsploit',
                        description: 'Tool utilizzabile da terminale di ExploitDB, in modo da consultare il database di exploit.',
                    }
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'success') {
                                message_div.innerHTML = "Hai acquistato il tool!";
                                button = document.createElement('button');
                                button.innerHTML = 'OK';
                                while (buttonContainer.firstChild) {
                                    buttonContainer.removeChild(buttonContainer.firstChild);
                                }
                                buttonContainer.appendChild(button);
                                button.onclick = function() {
                                    message_div.style.display = 'none';
                                    window.location.reload();
                                };
                                message_div.appendChild(buttonContainer);
                            } else {
                                alert("Non hai abbastanza soldi per acquistare il tool ");
                                message_div.style.display = 'none';
                            }
                        });
                } else {
                    message_div.innerHTML = "Hai acquistato il tool in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });

    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("setoolkit").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di SetToolkit?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/setoolkit')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'setoolkit',
                        description: 'Sofware-Engineer Toolkit.',
                    }
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'success') {
                                message_div.innerHTML = "Hai acquistato il tool!";
                                button = document.createElement('button');
                                button.innerHTML = 'OK';
                                while (buttonContainer.firstChild) {
                                    buttonContainer.removeChild(buttonContainer.firstChild);
                                }
                                buttonContainer.appendChild(button);
                                button.onclick = function() {
                                    message_div.style.display = 'none';
                                    window.location.reload();
                                };
                                message_div.appendChild(buttonContainer);
                            } else {
                                alert("Non hai abbastanza soldi per acquistare il tool ");
                                message_div.style.display = 'none';
                            }
                        });
                } else {
                    message_div.innerHTML = "Hai acquistato il tool in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });

    }

    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("veil").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di Veil?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/veil')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'veil',
                        description: 'Veil è uno strumento per generare payload bypassanti gli antivirus.',
                    };
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            message_div.innerHTML = "Hai acquistato Veil!";
                            button = document.createElement('button');
                            button.innerHTML = 'OK';
                            while (buttonContainer.firstChild) {
                                buttonContainer.removeChild(buttonContainer.firstChild);
                            }
                            buttonContainer.appendChild(button);
                            button.onclick = function() {
                                message_div.style.display = 'none';
                                window.location.reload();
                            };
                            message_div.appendChild(buttonContainer);
                        } else {
                            alert("Non hai abbastanza soldi per acquistare Veil!");
                            message_div.style.display = 'none';
                        }
                    });
                } else {
                    message_div.innerHTML = "Hai acquistato Veil in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("msfvenom").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di MSFVenom?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/msfvenom')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'msfvenom',
                        description: 'Msfvenom è uno strumento per generare payload per Metasploit.',
                    };
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            message_div.innerHTML = "Hai acquistato Msfvenom!";
                            button = document.createElement('button');
                            button.innerHTML = 'OK';
                            while (buttonContainer.firstChild) {
                                buttonContainer.removeChild(buttonContainer.firstChild);
                            }
                            buttonContainer.appendChild(button);
                            button.onclick = function() {
                                message_div.style.display = 'none';
                                window.location.reload();
                            };
                            message_div.appendChild(buttonContainer);
                        } else {
                            alert("Non hai abbastanza soldi per acquistare Msfvenom!");
                            message_div.style.display = 'none';
                        }
                    });
                } else {
                    message_div.innerHTML = "Hai acquistato Msfvenom in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("maltego").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di Maltego?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/maltego')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'maltego',
                        description: 'Maltego è uno strumento di OSINT.',
                    };
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            message_div.innerHTML = "Hai acquistato Maltego!";
                            button = document.createElement('button');
                            button.innerHTML = 'OK';
                            while (buttonContainer.firstChild) {
                                buttonContainer.removeChild(buttonContainer.firstChild);
                            }
                            buttonContainer.appendChild(button);
                            button.onclick = function() {
                                message_div.style.display = 'none';
                                window.location.reload();
                            };
                            message_div.appendChild(buttonContainer);
                        } else {
                            alert("Non hai abbastanza soldi per acquistare Maltego!");
                            message_div.style.display = 'none';
                        }
                    });
                } else {
                    message_div.innerHTML = "Hai acquistato Maltego in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("gophish").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di Gophish?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/gophish')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'gophish',
                        description: 'Gophish è uno strumento per il phishing.',
                    };
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            message_div.innerHTML = "Hai acquistato Gophish!";
                            button = document.createElement('button');
                            button.innerHTML = 'OK';
                            while (buttonContainer.firstChild) {
                                buttonContainer.removeChild(buttonContainer.firstChild);
                            }
                            buttonContainer.appendChild(button);
                            button.onclick = function() {
                                message_div.style.display = 'none';
                                window.location.reload();
                            };
                            message_div.appendChild(buttonContainer);
                        } else {
                            alert("Non hai abbastanza soldi per acquistare Gophish!");
                            message_div.style.display = 'none';
                        }
                    });
                } else {
                    message_div.innerHTML = "Hai acquistato Gophish in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("sqlmap").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di sqlmap?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/sqlmap')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'sqlmap',
                        description: 'Sqlmap è uno strumento per le SQL Injection.',
                    };
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            message_div.innerHTML = "Hai acquistato sqlmap!";
                            button = document.createElement('button');
                            button.innerHTML = 'OK';
                            while (buttonContainer.firstChild) {
                                buttonContainer.removeChild(buttonContainer.firstChild);
                            }
                            buttonContainer.appendChild(button);
                            button.onclick = function() {
                                message_div.style.display = 'none';
                                window.location.reload();
                            };
                            message_div.appendChild(buttonContainer);
                        } else {
                            alert("Non hai abbastanza soldi per acquistare sqlmap!");
                            message_div.style.display = 'none';
                        }
                    });
                } else {
                    message_div.innerHTML = "Hai acquistato sqlmap in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("responder").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di Responder?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/responder')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'responder',
                        description: 'Responder è uno strumento per per il poisoning di rete.',
                    };
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 'success') {
                            message_div.innerHTML = "Hai acquistato Responder!";
                            button = document.createElement('button');
                            button.innerHTML = 'OK';
                            while (buttonContainer.firstChild) {
                                buttonContainer.removeChild(buttonContainer.firstChild);
                            }
                            buttonContainer.appendChild(button);
                            button.onclick = function() {
                                message_div.style.display = 'none';
                                window.location.reload();
                            };
                            message_div.appendChild(buttonContainer);
                        } else {
                            alert("Non hai abbastanza soldi per acquistare Responder!");
                            message_div.style.display = 'none';
                        }
                    });
                } else {
                    message_div.innerHTML = "Hai acquistato Responder in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });
    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
document.getElementById("metasploit").addEventListener("click", function() {
    message_div = document.getElementById('message-for-player');
    message_div.style.zIndex = 3000;
    message_div.innerHTML = "Vuoi acquistare il tool utilizzabile da terminale di Metasploit?";
    message_div.style.display = 'block';

    button_yes = document.createElement('button');
    button_yes.innerHTML = 'Sì';
    button_no = document.createElement('button');
    button_no.innerHTML = 'No';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-shop';
    buttonContainer.appendChild(button_yes);
    buttonContainer.appendChild(button_no);
    message_div.appendChild(buttonContainer);

    button_yes.onclick = function() {
        fetch('/check_tool/msfdb')
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    const toolData = {
                        name: 'msfdb',
                        description: 'Metasploit è un software di penetration testing.',
                    }
                    fetch('/add_tool/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(toolData),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status === 'success') {
                                message_div.innerHTML = "Hai acquistato il tool!";
                                button = document.createElement('button');
                                button.innerHTML = 'OK';
                                while (buttonContainer.firstChild) {
                                    buttonContainer.removeChild(buttonContainer.firstChild);
                                }
                                buttonContainer.appendChild(button);
                                button.onclick = function() {
                                    message_div.style.display = 'none';
                                    window.location.reload();
                                };
                                message_div.appendChild(buttonContainer);
                            } else {
                                alert("Non hai abbastanza soldi per acquistare il tool ");
                                message_div.style.display = 'none';
                            }
                        });
                } else {
                    message_div.innerHTML = "Hai acquistato il tool in precedenza!";
                    button = document.createElement('button');
                    button.innerHTML = 'OK';
                    while (buttonContainer.firstChild) {
                        buttonContainer.removeChild(buttonContainer.firstChild);
                    }
                    buttonContainer.appendChild(button);
                    button.onclick = function() {
                        message_div.style.display = 'none';
                        window.location.reload();
                    };
                    message_div.appendChild(buttonContainer);
                }
            });

    }
    button_no.onclick = function () {
        message_div.style.display = 'none';
    };
});
