find . \( ! -regex '.*/\..*' \) -type f -exec sed -i '' -e 's/ENV_ID_REPLACED_BY_GIT_HOOK/你的环境ID/g' {} \;
