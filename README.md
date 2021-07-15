# Publicando WebApp em Azure Web Apps
## Azure CLI
Esse artigo prioriza a utilização do Azure CLI para fins didáticos, a operação descrita a seguir possui uma experiência muito mais intuitiva utilizando o portal do [azure]("https://portal.azure.com/").

Clique [aqui]("https://docs.microsoft.com/en-us/cli/azure/reference-index?view=azure-cli-latest") para ver a lista completa de comandos do Azure CLI.

## Criar um webapp

Execute o comando abaixo para fazer login na sua conta do azure.
```CMD
az login
```
Caso você tenha muitas contas em seu perfil, utilize o comando abaixo para definir uma conta padrão para esse tutorial, assim você garante que qual operação será feita no tenant correto
```CMD
az account set --subscription <subscriptionid>
```
Crie um grupo de recursos específico pra esse tutorial.
>Essa é uma prática altamente recomenda. No final desse tutorial podemos excluir o grupo com todos recursos dentro de uma vez, sem se preocupar que algum recurso tenha ficado para trás gerando cobranças indesejadas:
```CMD
az group create -n Coaltime -l eastus2
```
>Localização: Estamos utilizando o leste dos estados unidos pois é a localização mais barata, em produção escolha a localização mais próxima da sua.

Utilize o comando abaixo para ver os grupos de recursos da sua conta

```CMD
az group list -o table
```

Vamos criar um plano de serviço na camada gratuíta

```CMD
az appservice plan create -g Coaltime -n Coaltimeplan -l eastus2 --sku F1
```
>Clique [aqui](https://docs.microsoft.com/pt-br/azure/app-service/overview-hosting-plans) para saber mais sobre os planos de serviços do azure.


Utilize o comando abaixo para verificar os planos de serviços dentro do grupo de recursos Coaltime

```CMD
az appservice plan list -g Coaltime -o jsonc
```
Utilize o comando abaixo para criar o aplicativo web, substitua o nome **Coaltimeapp** por um nome exclusivo.

```CMD
az webapp create -g Coaltime -p Coaltimeplan -n Coaltimeapp --% --runtime "NODE|14-lts"
```
>Clique [aqui](https://docs.microsoft.com/pt-br/azure/app-service/overview) para saber mais sobre os serviços de aplicativo

Utilize o comando abaixo para obter a url do aplicativo:

```CMD
az webapp show -n Coaltimeapp -g Coaltime --query "{url:defaultHostName}" -o tsv
```

Utilize o comando a seguir para compactar os arquivos para implantação:

```PS1
Compress-Archive -Path dist/app/* -DestinationPath dist\app.zip -Force
```
Utilize o comando a baixo para fazer a implantação do aplicativo

```CMD
az webapp deployment source config-zip --src .\dist\app.zip -g Coaltime -n Coaltimeapp
```

