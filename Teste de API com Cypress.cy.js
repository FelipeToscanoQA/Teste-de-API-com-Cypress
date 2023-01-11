describe('Busca por um CEP e valida o resultado', () => { 
    
    it('Caso valido 1', () => { // Meu CEP e endereço
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/60843070' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Rua Socorro Gomes')
        expect(response.body.city).to.equal('Fortaleza')
        expect(response.body.longitude).to.equal(-38.4774001)
        expect(response.body.latitude).to.equal(-3.8338728)
        expect(response.body.state).to.equal('CE')
        expect(response.body.id).to.equal('60843070-22122')
        expect(response.body.number).to.equal('60843070')
        expect(response.body.neighborhood).to.equal('Guajeru')

  }) 
})
 
    it('Caso valido 2', () => { // CEP de Sao Paulo
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/08142331' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Rua Sérgio Hingst')
        expect(response.body.city).to.equal('São Paulo')
        expect(response.body.longitude).to.equal(-46.37804329999999)
        expect(response.body.latitude).to.equal(-23.512714)
        expect(response.body.state).to.equal('SP')
        expect(response.body.id).to.equal('08142331-22122')
        expect(response.body.number).to.equal('08142331')
        expect(response.body.neighborhood).to.equal('Jardim Nelia IV')

  }) 
}) 
    
    it('Caso valido 3', () => { // CEP do Espirito Santo
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/29167761' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Beco J')
        expect(response.body.city).to.equal('Serra')
        expect(response.body.longitude).to.equal(-40.2623279)
        expect(response.body.latitude).to.equal(-20.1835128)
        expect(response.body.state).to.equal('ES')
        expect(response.body.id).to.equal('29167761-22122')
        expect(response.body.number).to.equal('29167761')
        expect(response.body.neighborhood).to.equal('Taquara I')

  }) 
})

    it('Caso valido 4', () => { // CEP de Pernambuco
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/52190090' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Rua Sobral Pinto')
        expect(response.body.city).to.equal('Recife')
        expect(response.body.longitude).to.equal(-34.9257661)
        expect(response.body.latitude).to.equal(-8.0036643)
        expect(response.body.state).to.equal('PE')
        expect(response.body.id).to.equal('52190090-22122')
        expect(response.body.number).to.equal('52190090')
        expect(response.body.neighborhood).to.equal('Nova Descoberta')

  }) 
}) 
       
    it('Caso valido 5', () => { // CEP do Acre
          
      cy.request({ 
    
      method: 'GET', 
    
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/69911780' 
    
      }).then((response) => { 
    
        expect(response.status).to.equal(200); 
    
        expect(response.body.address).to.equal('Rua 16 de Julho')
        expect(response.body.city).to.equal('Rio Branco')
        expect(response.body.longitude).to.equal(-67.8286919)
        expect(response.body.latitude).to.equal(-9.9958675)
        expect(response.body.state).to.equal('AC')
        expect(response.body.id).to.equal('69911780-22122')
        expect(response.body.number).to.equal('69911780')
        expect(response.body.neighborhood).to.equal('Boa União')

  }) 
})
    
    it('Caso valido 6', () => { // CEP do Rio de Janeiro
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/24860452' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Avenida Prefeito Milton Rodrigues')
        expect(response.body.city).to.equal('Itaboraí')
        expect(response.body.longitude).to.equal(-42.9176879)
        expect(response.body.latitude).to.equal(-22.7842299)
        expect(response.body.state).to.equal('RJ')
        expect(response.body.id).to.equal('24860452-22122')
        expect(response.body.number).to.equal('24860452')
        expect(response.body.neighborhood).to.equal('Granjas Cabuçu (Manilha)')

  }) 
})
    
    it('Caso valido 7', () => { // CEP de Tocantins
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/77006028' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Quadra ACNE 11 Rua de Pedestre NE 9')
        expect(response.body.city).to.equal('Palmas')
        expect(response.body.longitude).to.equal(-48.32758579999999)
        expect(response.body.latitude).to.equal(-10.1789611)
        expect(response.body.state).to.equal('TO')
        expect(response.body.id).to.equal('77006028-22122')
        expect(response.body.number).to.equal('77006028')
        expect(response.body.neighborhood).to.equal('Plano Diretor Norte')

  }) 
}) 
    
    it('Caso valido 8', () => { // CEP de Mato Grosso
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/78558454' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Rua Paraná')
        expect(response.body.city).to.equal('Sinop')
        expect(response.body.longitude).to.equal(-55.5153696)
        expect(response.body.latitude).to.equal(-11.992434)
        expect(response.body.state).to.equal('MT')
        expect(response.body.id).to.equal('78558454-22122')
        expect(response.body.number).to.equal('78558454')
        expect(response.body.neighborhood).to.equal('Loteamento Alto da Glória')

  }) 
})
    
    it('Caso valido 9', () => { // CEP de Sergipe
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/49042143' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Avenida São Cristovão')
        expect(response.body.city).to.equal('Aracaju')
        expect(response.body.longitude).to.equal(-37.0851838)
        expect(response.body.latitude).to.equal(-10.9711538)
        expect(response.body.state).to.equal('SE')
        expect(response.body.id).to.equal('49042143-22122')
        expect(response.body.number).to.equal('49042143')
        expect(response.body.neighborhood).to.equal('São Conrado')

  }) 
})
    
    it('Caso valido 10', () => { // CEP do Piaui
      
      cy.request({ 

        method: 'GET', 

        url: 'https://cep-v2-americanas-npf.b2w.io/cep/64033642' 

      }).then((response) => { 

        expect(response.status).to.equal(200); 

        expect(response.body.address).to.equal('Quadra 28')
        expect(response.body.city).to.equal('Teresina')
        expect(response.body.longitude).to.equal(-42.7569555)
        expect(response.body.latitude).to.equal(-5.1506766)
        expect(response.body.state).to.equal('PI')
        expect(response.body.id).to.equal('64033642-22122')
        expect(response.body.number).to.equal('64033642')
        expect(response.body.neighborhood).to.equal('Santo Antônio')
    }) 
  })
})

describe('Busca por um CEP inválido,', () => {

it('Caso invalido 1', () => { // Endpoint inicial de testes invalidos
      
  cy.request({ 

    failOnStatusCode: false,  

    method: 'GET', 

    url: 'https://cep-v2-americanas-npf.b2w.io/cep/00000001' 

  }).then((response) => { 

    expect(response.status).to.equal(404); 

  })
})

  it('Caso invalido 2', () => { // Endpoint com varios 0 seguidos
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/00000000000000000000000000000000000000000000' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(404); 
  
    })
  })

  it('Caso invalido 3', () => { // Endpoint com 0 e caracteres especiais alternados
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/0@#000&*' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(400); 
  
    })
  })

  it('Caso invalido 4', () => { // Endpoint com caracteres especiais
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/!@#$%¨&*' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(400); 
  
    })
  })

  it('Caso invalido 5', () => { // Endpoint com apenas letras
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/abcdefgh' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(400); 
  
    })
  })

  it('Caso invalido 6', () => { // Endpoint com números e letras alternados
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/1a2b3c4d' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(400); 
  
    })
  })

  it('Caso invalido 7', () => { // URL + Endpoint com endereço dos Estados Unidos no Kansas / Grainfield
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/67737' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(404); 
  
    })
  })

  it('Caso invalido 8', () => { // URL sem CEP
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(400); 
  
    })
  })

  it('Caso invalido 9', () => { // Um Endpoint com 0 e 1 alternados
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/01010101' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(404); 
  
    })
  })

  it('Caso invalido 10', () => { // Na busca por um erro 500 
      
    cy.request({ 
  
      failOnStatusCode: false,  
  
      method: 'GET', 
  
      url: 'https://cep-v2-americanas-npf.b2w.io/cep/queroumerro500' 
  
    }).then((response) => { 
  
      expect(response.status).to.equal(400); 
  
    })
  })
})
