# Motion Report - NoirLux v1 Design System

## Animações Implementadas

### 1. ScrollReveal
**Localização**: `src/components/effects/ScrollReveal.tsx`
- **Trigger**: Quando elemento entra no viewport (margin: -10%)
- **Duração**: 600ms
- **Easing**: ease-out
- **Propriedades**: opacity (0→1), translateY (24px→0)
- **Delay**: Configurável (padrão: 0ms)
- **Uso**: Títulos, textos, cards

### 2. ParallaxLayer
**Localização**: `src/components/effects/ParallaxLayer.tsx`
- **Trigger**: Scroll contínuo
- **Deslocamento**: Configurável (padrão: -30px a +30px)
- **Limite Total**: ≤ 60px conforme especificação
- **Propriedades**: translateY
- **Uso**: Backgrounds, elementos decorativos

### 3. HoverLift
**Localização**: `src/components/effects/HoverLift.tsx`
- **Trigger**: Mouse hover
- **Duração**: 200ms
- **Propriedades**: translateY (-6px), boxShadow (elevação)
- **Uso**: CTAs principais, cards interativos

### 4. LoopDeco
**Localização**: `src/components/effects/LoopDeco.tsx`
- **Trigger**: Automático (loop infinito)
- **Duração**: 3000ms
- **Easing**: ease-in-out
- **Propriedades**: opacity (0.3→0.8→0.3)
- **Uso**: Elementos decorativos sutis

## Budget de Animações por Seção

### Hero Section
1. **ScrollReveal** - Badge (delay: 0ms)
2. **ScrollReveal** - Headline (delay: 100ms)
3. **ScrollReveal** - Subtitle (delay: 200ms)
- **ParallaxLayer**: Background gradient (±20px)
- **ParallaxLayer**: Shape decorativo (±40px)
- **HoverLift**: CTA principal
- **LoopDeco**: Badge decorativo

**Total**: 3 elementos animados ✅ (dentro do limite)
**Parallax Total**: 60px ✅ (dentro do limite)

### Outras Seções
Cada seção mantém o limite de máximo 3 elementos animados:
- Títulos com ScrollReveal
- Cards com HoverLift (apenas CTAs principais)
- Elementos decorativos com LoopDeco quando apropriado

## Acessibilidade - prefers-reduced-motion

**Implementação**: Todos os componentes de efeito respeitam `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  .motion-reduce {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Fallbacks**:
- ScrollReveal → Fade instantâneo
- ParallaxLayer → Posição estática
- HoverLift → Apenas mudança de sombra
- LoopDeco → Opacidade fixa

## Performance

- **will-change**: Aplicado apenas durante animações
- **transform-gpu**: Força aceleração de hardware
- **Intersection Observer**: Para ScrollReveal (performance otimizada)
- **requestAnimationFrame**: Para Lenis smooth scroll

## Configurações de Easing

- **ScrollReveal**: `ease-out` (suave entrada)
- **HoverLift**: `ease-out` (resposta rápida)
- **LoopDeco**: `ease-in-out` (movimento natural)
- **Lenis**: Custom cubic-bezier para scroll suave

## Validação

✅ Máximo 3 elementos animados por seção
✅ ParallaxLayer total ≤ 60px
✅ HoverLift apenas em CTAs principais
✅ LoopDeco sutil e não intrusivo
✅ prefers-reduced-motion respeitado
✅ Performance otimizada com GPU acceleration
✅ Intersection Observer para triggers eficientes