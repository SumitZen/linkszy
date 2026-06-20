/**
 * Promo codes — edit this file to add or remove codes.
 * Key = code string (case-insensitive match applied at redemption).
 * Value = plan tier to grant.
 *
 * Keep this file private / out of public repos once codes are added.
 */
const PROMO_CODES: Record<string, 'pro' | 'business'> = {
    LINKSZY_FRIENDS: 'pro',
    LINKSZY_PRO2025: 'pro',
    LINKSZY_BETAS: 'pro',
    LINKSZY_TEAM: 'business',
};

export default PROMO_CODES;
