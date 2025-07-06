from sqlalchemy import TIMESTAMP, Boolean, Column, Integer, String, func
from configuracion.app.bd.database import Base


class Estudiante(Base):
    __tablename__ = "Estudiante"
    __table_args__ = {"schema": "public"}  # Especifica el esquema

    id_estudiante = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(30), nullable=True, unique=True)
    apellido = Column(String(30), nullable=True)
    dni = Column(String(8), nullable=True)
    email = Column(String(120), nullable=False)
    estado = Column(String(30), nullable=False)
