#!/bin/bash

# Executa a IA para gerar a mensagem de commit
commit_message=$(git diff | cody chat --stdin -m 'Write a commit message for this diffcle following conventional commits')

# Extrai a mensagem de commit das crases
commit_message=$(echo "$commit_message" | sed -n '/```/,/```/p' | sed '1d;$d')

# Adiciona as mudanças ao staging
git add .

# Cria um arquivo temporário para a mensagem de commit
temp_file=$(mktemp)
echo "$commit_message" > "$temp_file"

# Executa o git commit com a mensagem de commit gerada
git commit -F "$temp_file"

# Remove o arquivo temporário
rm "$temp_file"