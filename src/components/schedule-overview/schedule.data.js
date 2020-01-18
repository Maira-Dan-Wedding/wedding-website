const SCHEDULE_DATA = [
    {
        id: 1,
        title: "Chegada || Arrival", 
        imgUrl: "https://lh3.googleusercontent.com/qaGmZxJ9fWJmIPAxgJu1HiZp0APBqtEMPo-LZ4Daes0ixyi4WI_0dIGlbMB9MIYkvh19ft_k4AJdf3gz_rp_eJvBsOSvZTSyLlv2rpx6qe-dU4CfWWTvw-uOHbDeC9196CAwCjgDyBaPJSSsRM87SSRPgMyJdYSSiqKOXkBOZ0h8YQFsdFVHXiQpbFjs1i5GVv5hEJgpkCbyr08OK3pcH-_MGScxAfLLvf22jPnRftdPdUPWAR0HYUrYUxurSGfbJcBwdZt2KdMb9RZZdPNLqOLaTdDjZVORjjirT4s7IFciazl2QAv9qeHMMCg-rOM8n0eX4uw1Kyf2astwchgj0uXQUV_sQxMb-kv8Sy8gxiuTCu8BpvZH4gihUoKe6s8MpDKGcsqDAQ4Au3YFasYzuN7Q2SQ-jkRB82cM4phPsLLuxTfC90f9j4wzsG_MVJM1RIMvNhuNC8pGVYuax_4guaNUqiMEBlnn8Zz3wuMgTAEXxWCogutbG0PcrUsybTHd5ucXGXpYmPt4qvyR2OB5s3du5F07Id_BiyuZ8ln4fv2bAQhGd8HOPeaT9l_wcyyEj-w7JejjQdyvo78ryesR9RbYZflauTGAkbhM9mPab6hqE13kc7zNdpO1QM5DO03zcDEGQVepPAEcTrqAS4z8w-Dmat5TCFGd81mreBUHiXbaKxIZEvOskkJQb-4GJxiEwDb9nxnPyP2etJZXM3oCjbblZTEVe_w1ZSnIfFwbBhS4fds=w661-h371-no",
        pt: {
            date: "13 de Novembro",
            weekday: "Sexta",
            duration: "",
            attire: "",
            copy: "Dia livre para vocês chegarem com calma, entrarem no clima nordestino e relaxarem na praia antes do grande dia! O aeroporto mais próximo é o de Recife que fica há 1hr15 da praia dos Carneiros."
        },
        en: {
            date: "November 13th",
            weekday: "Friday",
            duration: "",
            attire: "",
            copy: "Free day. Plan accordingly your arrival at paradise so you can get rid of the jet lag and join us at the beach or relax by the pool before the party weekend starts. Keep in mind the closest airport is Recife which is 1hr15 away from Carneiros Beach"
        },
    },
    {
        id: 2,
        title: "Welcome Party", 
        imgUrl: "https://lh3.googleusercontent.com/pvctQ7VoBMnK3hJKOwU4w8S8sgUmwdExTtSy3LY86mQiELXffjyfg4xtdFJiQ7K6t_vx6B4xmdjR3cHhtoY30hLF0eIvXt9PtxuRPUOE16QGAnj3VNl7Yme1J0p8elmPwkqZ1kXZwHClyIY6keIKQDzIzszn8BCEa5Wn0_7SfIDDGQQyQ0wdxmypGd1RgiVmP1Xj3YMj-8YtbC3N48Ufz_z4Fr3otJwBfNvAz4Wv3TmCE13FgffEieavKbxtEOfIfjm075xs3lmGTh4T6NoFCEn-XrmMvzoBi7-fS4rQ2oSW6WiyoPZjEQuF1KL7oRgwCuNrO5Tr6zSlmo9uYNSVEcYViFCWwoPNQWNWtvZEhRboPekc23d58jPVUBJQBqvd3n9zVBh4q8M_EYo5p3BPH5i3GLACJIrM3fIu8QHY_P0ZQjImY_KKc8-YIs4lLJ0IldMUS0-I_Jh-0nOZd76eEAjhJM8Af0j9ubU4ba567RO2vfd4qEHqTLYnzo0PyYMI4u4RcFU5zDAtf0t9FJluRYFvju4uTybKOi7jjsSv_fVV5TfgLJZU9EZ635govkaYOZtE2DbvC4mB1GNFpdsCMNmWKOsjNXoCc4Rq0Xmcy9_oUJKsKSB4QunOErDlREnLbuGcUOSXu0igVjZ3VQfyR2cSJXl6WCpLanfLgw9WNmGEAYDcEseFijwJjOcpta3qXdo1gAj0Uy8BVqRBSM3bXZ3f44orEkuNhCHHhL9K2Wf6xlE=w960-h640-no",
        pt: {
            date: "14 de Novembro",
            weekday: "Sábado",
            duration: "16:00 às 22:00",
            attire: "Praia Casual. Não recomendamos salto",
            copy: ""
        },
        en: {
            date: "November 14th",
            weekday: "Saturday",
            duration: "4pm until 10pm",
            attire: "Casual beach attire. We do not recommend high heels.",
            copy: ""
        },
    },
    {
        id: 3,
        title: "Cerimônia || Ceremony", 
        imgUrl: "https://lh3.googleusercontent.com/nhxJ_xUHv6VL2h2bhft4ypXwAH1H7jORCQLiDC8SlKrDXCjA1O65b-msTx2RHTUgX6maZ_sKWWbt7FBjblLkRTbTr13Q2tgQWWpU3jEREgIAQ-y3_45Z1rdVPhMKeUIrgoQ7CtzA7On7MD9W5gc99xOdj63NYmSv_XfJC-_eCwz6NRtvFDphocskEcQDIVvq25Z9_Elsn19-Gvaittl0Z8IrKxUnXl8qAzKhQaAbphJKR5WwcJGDNDFBwbY6grr1J4tMe8-4EgV0vLrhVIunP-Nw3qvP9lKxQEYvnl1pFZM8DAdhfW6NhxcMAUsOPwmvS_mKV-Hp390Z0osX7db1nZjX3c_AgsSestsNC6dBOyO0mjp4_nFhHAViV-S_IidUqJX_t6S18eYrZLCQUt_dQh-rOAgQtbIUCwdO8xAkGeByiC2Bd9Sdxnyv9W1KaJUZAdJYRIi2SBI3sIEryMHrnYFmkwuAnnwtvycVTUa1XomNBLbAk6LDWKmcclNwH7yvJC47OY5xn99XirFDc115KP24bE4hsw1xKx8MzhXKo6u4PkE9FyK1ufUA5DXAz_zSm71FJj5Je9xLwFCJ0u5baamED7RIzdpZQ1iLp5LZYaNcGBNDc0zRf8GrmoJnGJYR_WTbtOJbAhBq-EIVEMH313mnyjwqoeZJExqqU81FZMTvRElV03UWPBbbPXgDe-dJXu-rjMxhS_tw9z54CsIBUaCvvTPqpVb9ikZywtVMtrZJEJ4=w960-h640-no",
        pt: {
            date: "15 de Novembro",
            weekday: "Domingo",
            duration: "16:15 às 17:15",
            attire: "Homens sem gravata, blazers opcionais. Mulheres: Salto grosso é mais do que bem vindo. À noite pode ventar, sugerimos levar uma pashmina.",
            copy: "A festa não será no mesmo local da cerimônia e ambas celebrações irão começar pontualmente, por favor não se atrase. Chegue cedo para tirar fotos lindas!"
        },
        en: {
            date: "November 15th",
            weekday: "Sunday",
            duration: "4:15pm until 5:15pm",
            attire: "​Beach formal attire. Men no need for ties and women please avoid stilettos. Keep in mind it’s pretty windy at night so bring a pashmina or blazer just in case.",
            copy: "The ceremony and party will start on time. Please don’t be late. Arrive early so you can take beautiful pictures"
        },
    },

    {
        id: 4,
        title: "Festa || Party", 
        imgUrl: "https://lh3.googleusercontent.com/zSw04WjDpiaSrIvhtMBjuylCaDCN8GBZOErQVd6ZckVwR1YXCfHQN2e6XYYQ6h7fp-TnGg__MJGFqtpZqBekhWGDUkuFTlqrXaDtMTLN3lIFBQ99638ZC4TDgqYikgsAdlzriYCfaQbyLMc6q4JJz9qv65Nwqog5ltrmYSjt5hA1xyTBVVi8rGzXTnicpsDvI8toF07f61H2_3hncyhOfdmDxNvBC5zGgZnKpt4etBSNYSNvaDXQkTFfPjQQlgi4zJbkZjDZvUB2ph_vCgDhPvXgCIXE1dAlhCyGt-lJseXUDNtwP6WwNi_dJbxohJCIctYpQrSKdS77RjdJNo1-DxcjPliko_wrcfrSuKWyPjQhCr70oux-006JoCfYeebncIdrG19JuTleKPZ9puZ6KWGebzSwv-9s7Hb6ByDq5CqtzIss2XQPZuG5f0ycPyRoQH7GhWuk4EgBAbM_lRdrUgINICvnnjCRuEa5bT719ScNzJj4tFn7liCm5HNC6BXGlxVOeQpE4yrNAp-xS-m6XTfjLYc2DUK8xtMQKJC3cbI3DAQUVj7ULWTyYqZfVrMniz8YilN-5NxhHtlIOO9tX3XMHDcYCeZ6oHpLoWIYTqJxCKDE9Rln70WWeD6KfaXkbI2p8mSwCBy23qqN6MDDMxPbPbA-zwbG6ACzMid8Bnx_vezkOcU2YwGH_7El3aAT71gbpFAA1lK_5nurZRpuuNuobX9W33pMLkcjVJwWCWOEI8E=w855-h640-no",
        pt: {
            date: "15 de Novembro",
            weekday: "Domingo",
            duration: "17:45 até o Sol nascer!",
            attire: "Homens sem gravata, blazers opcionais. Mulheres: Salto grosso é mais do que bem vindo. À noite pode ventar, sugerimos levar uma pashmina.",
            copy: ""
        },
        en: {
            date: "November 15th",
            weekday: "Sunday",
            duration: "5:45pm until sunrise!",
            attire: "​Beach formal attire. Men no need for ties and women please avoid stilettos. Keep in mind it’s pretty windy at night so bring a pashmina or blazer just in case.",
            copy: ""
        },
    },
    
]

export default SCHEDULE_DATA; 