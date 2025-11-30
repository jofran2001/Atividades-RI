// Módulo bhaskara.ts
// Classe Bhaskara: calcula raízes de equação de segundo grau (ax² + bx + c = 0)
export default class Bhaskara {
    calcularRaizes(a, b, c) {
        // Calcular discriminante (Δ = b² - 4ac)
        const delta = b * b - 4 * a * c;
        if (delta > 0) {
            // Duas raízes reais distintas
            const x1 = (-b + Math.sqrt(delta)) / (2 * a);
            const x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return [x1, x2];
        }
        else if (delta === 0) {
            // Uma raiz real (raiz dupla)
            const x = -b / (2 * a);
            return [x];
        }
        else {
            // Δ < 0: raízes complexas (não reais)
            console.log('Δ < 0: A equação não possui raízes reais.');
            return [];
        }
    }
}
//# sourceMappingURL=bhaskara.js.map