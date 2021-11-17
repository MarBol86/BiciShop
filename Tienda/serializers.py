from rest_framework import serializers

from Tienda.models import Producto


class ProductoSerializer(serializers.ModelSerializer):
    in_cart = serializers.SerializerMethodField()


    class Meta:
        model = Producto
        fields = (
            'producto', 'nombre', 'precio', 'categoria', 'cantidad', 'descripcion', 'in_cart'
        )

    def get_in_cart(self, instance):
        return 0
