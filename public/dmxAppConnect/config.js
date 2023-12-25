dmx.config({
  "main": {
    "global": [
      {
        "type": "text",
        "name": "title"
      }
    ]
  },
  "navbar": {
    "localStorage": [
      {
        "type": "text",
        "name": "nom"
      },
      {
        "type": "text",
        "name": "matricule"
      }
    ]
  },
  "sidebar": {
    "actualPage": {
      "meta": null,
      "outputType": "text"
    }
  },
  "bordereau": {
    "localStorage": [
      {
        "type": "text",
        "name": "token"
      }
    ],
    "getReleve": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "number",
            "name": "num_releve"
          },
          {
            "type": "number",
            "name": "index_a"
          },
          {
            "type": "text",
            "name": "date_releve"
          },
          {
            "type": "text",
            "name": "fin_periode"
          },
          {
            "type": "number",
            "name": "consommation"
          },
          {
            "type": "number",
            "name": "moy_consommation"
          },
          {
            "type": "text",
            "name": "date_saisie"
          },
          {
            "type": "number",
            "name": "utilisateur_der_maj"
          },
          {
            "type": "text",
            "name": "date_der_maj"
          },
          {
            "type": "number",
            "name": "num_cpteur"
          },
          {
            "type": "number",
            "name": "num_tourne"
          },
          {
            "type": "number",
            "name": "id_periode"
          },
          {
            "type": "number",
            "name": "id_pl"
          },
          {
            "type": "text",
            "name": "anomalie"
          },
          {
            "type": "number",
            "name": "type_releve"
          },
          {
            "type": "number",
            "name": "nature_releve"
          },
          {
            "type": "number",
            "name": "matricule"
          },
          {
            "type": "text",
            "name": "coment"
          },
          {
            "type": "number",
            "name": "id_contrat"
          },
          {
            "type": "number",
            "name": "id_periode_prec"
          },
          {
            "type": "text",
            "name": "facture_faite"
          },
          {
            "type": "number",
            "name": "num_bordereaux"
          },
          {
            "type": "text",
            "name": "reprise"
          },
          {
            "type": "text",
            "name": "date_pf"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          }
        ]
      }
    ],
    "releveView": {
      "meta": [
        {
          "type": "number",
          "name": "num_releve"
        },
        {
          "type": "number",
          "name": "index_a"
        },
        {
          "type": "text",
          "name": "date_releve"
        },
        {
          "type": "text",
          "name": "fin_periode"
        },
        {
          "type": "number",
          "name": "consommation"
        },
        {
          "type": "number",
          "name": "moy_consommation"
        },
        {
          "type": "text",
          "name": "date_saisie"
        },
        {
          "type": "number",
          "name": "utilisateur_der_maj"
        },
        {
          "type": "text",
          "name": "date_der_maj"
        },
        {
          "type": "number",
          "name": "num_cpteur"
        },
        {
          "type": "number",
          "name": "num_tourne"
        },
        {
          "type": "number",
          "name": "id_periode"
        },
        {
          "type": "number",
          "name": "id_pl"
        },
        {
          "type": "text",
          "name": "anomalie"
        },
        {
          "type": "number",
          "name": "type_releve"
        },
        {
          "type": "number",
          "name": "nature_releve"
        },
        {
          "type": "number",
          "name": "matricule"
        },
        {
          "type": "text",
          "name": "coment"
        },
        {
          "type": "number",
          "name": "id_contrat"
        },
        {
          "type": "number",
          "name": "id_periode_prec"
        },
        {
          "type": "text",
          "name": "facture_faite"
        },
        {
          "type": "number",
          "name": "num_bordereaux"
        },
        {
          "type": "text",
          "name": "reprise"
        },
        {
          "type": "text",
          "name": "date_pf"
        }
      ],
      "outputType": "array"
    }
  }
});
