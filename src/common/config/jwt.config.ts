const envExpires = process.env.JWT_ACCESS_EXPIRES_IN;
const isNumeric = envExpires && !Number.isNaN(Number(envExpires));

export const JwtConfig = {
  JWT_ACCESS_SECRET:
    process.env.JWT_ACCESS_SECRET ||
    'VQvJF4b7xtJyyqvZ7bLrgpnYKGXlgCuSiTQnzgQXEWhtftLaHE8NAYoNuQPK62Tv',
  JWT_ACCESS_EXPIRES_IN: isNumeric
    ? Number.parseInt(envExpires)
    : envExpires || 6 * 60 * 60, // Default 6h
};
